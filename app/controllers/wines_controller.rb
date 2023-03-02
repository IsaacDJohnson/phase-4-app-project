class WinesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        wines = Wine.all
        render json: wines
    end

    def show
        wine = Wine.find(params[:id])
        render json: wine
    end

    def create 
        wine = Wine.create(wine_params)
        render json: wine, status: :created
    end

    def update
        wine = Wine.find_by(id: params[:id])
        wine.update(wine_params)
        render json: wine    
    end

    def destroy
        wine = Wine.find_by(id: params[:id])
        wine.destroy
        head :no_content    
    end

    private

    def wine_params
        params.permit(:name, :verietal, :origin, :year)    
    end

    def render_not_found_response
        render json: { error: "Author not found" }, status: :not_found
    end
end
