class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
  end

  def index # just an unused endpoint serving up :current_user
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    user = User.new(parsed)
    if user.save
      sign_in(user)
      render json: { message: ["registration successful!"], email: user.email }
    else
      render json: { errors: report(user.errors) }
    end
  end

  def currentUser
    render json: current_user
  end

end
