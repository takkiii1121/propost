class Api::LoginController < ApplicationController

  def login
    login_user = User.find_by(email: params[:email])
    if login_user && login_user.authenticate(params[:password])
      login_user.token = create_token
      login_user.token_expire = DateTime.now + 1
      login_user.save
      render json: {token: login_user.token, isAuthenticate: true}
    else
      render json: {isAuthenticate: false}
    end
  end


  def logout
    @user = User.find(params[:id])
    if @user.token != "" && @user.token_expire != ""
      @user.token = nil
      @user.token_expire = ""
      @user.save
      render json: {logout: true}
    else
      render json: {logout: false}
    end
  end
end
