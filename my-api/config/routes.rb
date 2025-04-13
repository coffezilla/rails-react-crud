Rails.application.routes.draw do

  # /users/login
  # resources :users, only: [:create, :index, :show, :update, :destroy] do
  #   collection do
  #     post :login
  #   end
  # end

  # /login
  # resources :users, only: [:create, :index, :show, :update, :destroy]
  post 'register', to: 'users#create'
  get 'users', to: 'users#index'
  get 'users/:id', to: 'users#show'
  patch 'users/:id', to: 'users#update'
  delete 'users/:id', to: 'users#destroy'  
  
  # auth
  post 'login', to: 'users#login'
  post 'request-access-token', to: 'users#refresh_token'

  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "users#index"  # Change this to the appropriate controller/action
end