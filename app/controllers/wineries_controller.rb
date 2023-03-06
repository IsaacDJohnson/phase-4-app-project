class WineriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        wineries = Winery.all
        render json: wineries
    end

    def create 
        winery = Winery.create(winery_params)
        render json: winery, status: :created
    end

    def show
        winery = Winery.find(params[:id])
        render json: winery
    end

    private

    def winery_params
        params.permit(:name, :region)    
    end

    def render_not_found_response
        render json: { error: "Winery not found" }, status: :not_found
    end
end
