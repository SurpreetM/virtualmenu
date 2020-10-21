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
            #heading.errors.full_messages
            render json: {errors: heading.errors.full_messages}, status: :not_acceptable 
        end 
        
        
        # Not sure if we need this
        
    end 

    def destroy
        heading = Heading.find(params[:id])
        heading.destroy
        # maybe better to redirect to index? 
        headings = Heading.all
        render json: HeadingSerializer.new(headings)
    end

    def show
        heading = Heading.find(params[:id])
        render json: HeadingSerializer.new(heading)
    end 


end
