Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resources :wines, only: [:index, :show, :create]
  resources :wineries, only: [:index, :show, :create]
  resources :tastings, only: [:index, :create, :update, :destroy, :show]
  resources :users
  get "/my_wines", to: "users#show_wines"
  post "/signup", to: "users#create"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  get "/sessions", to: "sessions#index"
  get "/me", to: "users#show"

end
