Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resources :wines, only: [:index, :show, :create, :update, :destroy]
  resources :wineries, only: [:index, :show, :create]
  post "/signup", to: "users#create"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  get "/sessions", to: "sessions#index"
  get "/users", to: "users#index"
  get "/me", to: "users#show"

end
