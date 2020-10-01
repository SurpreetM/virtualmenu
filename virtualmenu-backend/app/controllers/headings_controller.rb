class HeadingsController < ApplicationController
    def index
        headings = Heading.all
        render json: HeadingSerializer.new(headings)
    end
end
