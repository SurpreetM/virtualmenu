class HeadingsController < ApplicationController
    def index
        @headings = Heading.all
        render json: @headings, include: [:food_items]
    end
end
