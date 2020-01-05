class Api::V1::UsersController < ApplicationController
    before_action :authenticate_token, only: [:index, :show]
    def index
        @users = User.order(created_at: :desc)
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: @user.errors
        end
    end

    def update
        @user = User.find(params[:id])
        @user.update_attributes(user: params[:user])
        render json: @user
    end

    def authenticate_token
        time = DateTime.now
        @users = User.where.not(token: "")
        @users.each do |user|
            if user.token_expire < time && user.token != ""
                user.token = ""
                user.token_expire = ""
                user.save
            end
        end
    end


    private
        
        def user_params
            params.permit(:name, :email, :password, :password_confirmation, :description)
        end
end
