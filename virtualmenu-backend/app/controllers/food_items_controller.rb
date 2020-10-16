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
    end 



    def destroy
        food_item = FoodItem.find(params[:id])
        food_item.destroy
        # maybe better to redirect to index? 
        food_items = FoodItem.all
        render json: FoodItemSerializer.new(food_items)
    end

    

    
end
