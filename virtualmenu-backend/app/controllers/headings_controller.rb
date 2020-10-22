class HeadingsController < ApplicationController

    def index
        headings = Heading.all
        render json: HeadingSerializer.new(headings)
    end

    def create
        heading = Heading.new
        heading.name = params[:heading][:name]
        if heading.valid? 
            heading.save
            render json: HeadingSerializer.new(heading)
        else   
            render json: {errors: heading.errors.full_messages}, status: :not_acceptable 
        end   
    end 

    def destroy
        heading = Heading.find(params[:id])
        heading.destroy 
        headings = Heading.all
        render json: HeadingSerializer.new(headings)
    end

end
