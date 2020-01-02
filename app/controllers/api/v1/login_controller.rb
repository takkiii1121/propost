class Api::V1::LoginController < ApplicationController
  def login
    login_user = User.find_by(email: params[:email])
    if login_user && login_user.authenticate(params[:password])
      render json: login_user
    else
      render json: 'no auth'
    end
  end
end
