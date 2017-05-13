class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  helper_method :current_user, :user_signed_in

  def show
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    user = User.new(parsed)
    if user.save
      sign_in(user)
      render json: { message: ["registration successful!"], email: user.email }
    else
      return root_path
    end
  end

  def currentUser
    render json: current_user
  end

end
