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

    private

    def render_not_found_response
        render json: { error: "Author not found" }, status: :not_found
    end
end
