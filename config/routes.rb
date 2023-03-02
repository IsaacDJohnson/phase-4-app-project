Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resources :wines, only: [:index, :show, :create, :update, :destroy]
end
