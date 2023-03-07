class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # skip_before_action :authorize, only: :create
    
    def index
        users = User.all
        render json: users
    end
    
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not authorized" }, status: :unauthorized
        end
    end

    def show_wines
        user = User.find_by(id: session[:user_id])
        wines = user.wines
        render json: wines    
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created    
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)    
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end
end
