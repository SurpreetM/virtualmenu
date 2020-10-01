class FoodItemsController < ApplicationController
    def index
        food_items = FoodItem.all
        render json: FoodItemSerializer.new(food_items)
        #render json: food_items, include: [:heading]

    end

    
end
