Rails.application.routes.draw do

  namespace :api do
    # me
    get 'me', to: 'users#index'
    patch 'me', to: 'users#update'
    delete 'me', to: 'users#destroy'  
    
    # auth
    post 'register', to: 'auth#create'
    post 'login', to: 'auth#login'
    post 'request-access-token', to: 'auth#refresh_token'
  end

  # get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "users#index"  # Change this to the appropriate controller/action
end