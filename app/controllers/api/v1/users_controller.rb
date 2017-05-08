class Api::V1::UsersController < ApplicationController
  helper_method :current_user, :user_signed_in, :sign_in
  protect_from_forgery unless: -> { request.format.json? }

  def show
    if user_signed_in?
      render json: { current_user: current_user.email }
    else
      render json: { current_user: "bob" }
    end

  end

  def index # just an unused endpoint serving up :current_user
    if user_signed_in?
      render json: { current_user: current_user }
    else
      render json: { current_user: {} }
    end
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    user = User.new(parsed)
    if user.save
      binding.pry
      render json: { message: ["registration successful!"], user_id: user.id }
    else
      render json: { errors: report(user.errors) }
    end
  end



end
