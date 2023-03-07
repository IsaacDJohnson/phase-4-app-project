class TastingsController < ApplicationController

    def index
        tasting = Tasting.all
        render json: tasting    
    end

    def create
        tasting = Tasting.create(tasting_params)
        render json: tasting    
    end

    def show
        tasting = Tasting.find(params[:id])
        render json: tasting    
    end

    def destroy
        tasting = Tasting.find_by(id: params[:id])
        tasting.destroy
        head :no_content    
    end
    
    def update
        tasting = Tasting.find_by(id: params[:id])
        tasting.update(tasting_params)
        render json: tasting    
    end

private

    def tasting_params
        params.permit(:name, :rating, :user_id, :wine_id)    
    end

end
