class FoodItemsController < ApplicationController
    def index
        food_items = FoodItem.all
        render json: FoodItemSerializer.new(food_items)
        #render json: food_items, include: [:heading]
    end

    def create
        food_item = FoodItem.new
        heading = Heading.find_by(name: params[:heading])
        food_item.name = params[:name]
        food_item.description = params[:description]
        food_item.price = params[:price]
        food_item.heading_id = heading.id
        food_item.save
        render json: FoodItemSerializer.new(food_item)
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
