class FoodItemsController < ApplicationController
    def index
        @food_items = FoodItem.all
        render json: @food_items, include: [:heading]
    end

    
end
