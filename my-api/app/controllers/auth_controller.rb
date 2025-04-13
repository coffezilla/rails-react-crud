class AuthController < ApplicationController

    # User login
    def login
        user = User.find_by(email: params[:email])
    
        if user&.authenticate(params[:password])
          # Generate tokens
          access_token = generate_access_token(user)
          refresh_token = generate_refresh_token(user)
  
          render json: { access_token: access_token, refresh_token: refresh_token, user: user }, status: :ok
        else
            render json: { error: "Invalid email or password" }, status: :unauthorized
        end
    end
    
    # Refresh access token
    def refresh_token
        begin
            decoded_token = JWT.decode(params[:refresh_token], Rails.application.credentials.secret_key_base, true, { algorithm: 'HS256' })
            user_id = decoded_token[0]['user_id']
            user = User.find(user_id)
        
            # Generate a new access token
            new_access_token = generate_access_token(user)
        
            render json: { access_token: new_access_token, user_id: user.id, email: user.email }, status: :ok
        rescue JWT::DecodeError
            render json: { error: "Invalid refresh token" }, status: :unauthorized
        end
    end


    private 

    # Generate JWT access token
    def generate_access_token(user)
        # payload = { user_id: user.id, exp: 5.seconds.from_now.to_i }
        payload = { user_id: user.id, exp: 1.hour.from_now.to_i }
        JWT.encode(payload, Rails.application.credentials.secret_key_base) 
    end

    # Generate refresh token (a simple approach)
    def generate_refresh_token(user)
        # payload = { user_id: user.id, exp: 15.seconds.from_now.to_i }
        payload = { user_id: user.id, exp: 24.hours.from_now.to_i }
        JWT.encode(payload, Rails.application.credentials.secret_key_base)
    end      

end
