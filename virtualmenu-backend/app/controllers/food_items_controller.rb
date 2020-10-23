class FoodItemsController < ApplicationController
    #def index
    #    food_items = FoodItem.all
        #render json: FoodItemSerializer.new(food_items)
    #end

    def create
        heading = Heading.find_by(name: params[:heading])  
        food_item = FoodItem.new
        food_item.name = sanitize_name(params[:name])
        food_item.description = sanitize_description(params[:description])
        food_item.price = params[:price]
        food_item.heading = heading
        if food_item.valid?
            food_item.save
            render json: FoodItemSerializer.new(food_item)
        else 
            render json: {errors: food_item.errors.full_messages}, status: :not_acceptable 
        end 
    end 

    def sanitize_description(description)       
        length = description.length
        if description.slice(length-1) == "."
            description.strip.capitalize
        else
            description.strip.capitalize + "." 
        end
    end 

    def sanitize_name(heading)
        heading.strip.capitalize
    end


    def destroy
        food_item = FoodItem.find(params[:id])
        heading = food_item.heading
        food_item.destroy
        # rendering the deleted food item's heading here to check whether to add delete button. 
        # this doesn't seem to include the array of food items when it is rendered from the serializer. 
        render json: heading, include: [:food_items]
    end

    

    
end
