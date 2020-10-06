class HeadingsController < ApplicationController

    def index
        headings = Heading.all
        render json: HeadingSerializer.new(headings)
    end

    def create
        heading = Heading.new
        heading.name = params[:heading][:name]
        heading.save
        # Not sure if we need this
        render json: HeadingSerializer.new(heading)
    end 

    def destroy
    end


end
