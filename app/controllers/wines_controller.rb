class WinesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: :index

    def index
        wines = Wine.all
        render json: wines
    end

    def show
        wine = Wine.find(params[:id])
        render json: wine
    end

    def create 
        wine = Wine.create!(wine_params)
        render json: wine, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def wine_params
        params.permit(:name, :verietal, :region, :year, :winery_id)    
    end

    def render_not_found_response
        render json: { error: "Wine not found" }, status: :not_found
    end
end
