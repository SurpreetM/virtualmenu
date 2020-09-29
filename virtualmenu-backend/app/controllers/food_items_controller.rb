class FoodItemsController < ApplicationController
    def index
        @food_items = FoodItem.all
        render json: @food_items
    end
end
