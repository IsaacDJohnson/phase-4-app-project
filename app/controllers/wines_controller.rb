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
        params.permit(:name, :verietal, :region, :year, :winery_id)    
    end

    def render_not_found_response
        render json: { error: "Wine not found" }, status: :not_found
    end
end
