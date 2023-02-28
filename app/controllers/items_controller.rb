class EntriesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
    end

    def show
    end

    private

    def render_not_found_response
        render json: { error: "Author not found" }, status: :not_found
    end

end
