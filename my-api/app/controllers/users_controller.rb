class UsersController < ApplicationController
    # Skip CSRF for API
    # skip_before_action :verify_authenticity_token, only: [:create, :login]
    before_action :authenticate_user!, only: [:index, :update, :destroy]

    # Show current user
    def index
      render json: @current_user
    end
  
    # Update current user
    def update
  
      if @current_user.update(user_params)
        render json: @current_user
      else
        render json: @current_user.errors, status: :unprocessable_entity
      end
    end
  
    # Delete current user
    def destroy
      @current_user.destroy
      head :no_content
    end

    private

      # Permit parameters without requiring user key
      def user_params
        params.permit(:name, :email, :password)
      end

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
        
  end