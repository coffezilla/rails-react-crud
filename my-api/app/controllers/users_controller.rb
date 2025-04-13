class UsersController < ApplicationController
    # Skip CSRF for API
    # skip_before_action :verify_authenticity_token, only: [:create, :login]
    before_action :authenticate_user!, only: [:index, :show, :update, :destroy]

    # Create a new user
    def create
      user = User.new(user_params)
  
      if user.save
        render json: user, status: :created
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end
  
    # Show all users
    def index
      users = User.all
      render json: users
    end
  
    # Show user details
    def show
      user = User.find(params[:id])
      render json: user
    end
  
    # Update user details
    def update
      user = User.find(params[:id])
  
      if user.update(user_params)
        render json: user
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end
  
    # Delete a user
    def destroy
      user = User.find(params[:id])
      user.destroy
      head :no_content
    end

  
    private
  
      # Authenticate user using JWT
    def authenticate_user!
            token = request.headers['Authorization']&.split(' ')&.last
        begin
            decoded_token = JWT.decode(token, Rails.application.credentials.secret_key_base, true, { algorithm: 'HS256' })
            @current_user = User.find(decoded_token[0]['user_id'])
        rescue JWT::DecodeError
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

    # Permit parameters without requiring user key
    def user_params
      params.permit(:name, :email, :password)
    end
        
  end