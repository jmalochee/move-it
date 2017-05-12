class Api::V1::SessionsController < ApplicationController

  def new
    render json: { session: session }
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    binding.pry
    user = User.find_by(email: parsed[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      render json: { message: ["welcome back, #{user.first_name}"] }
      sign_in(user)
    else
      render json: { errors: ["invalid email/username & password combination"] }
    end
  end

  def destroy
    sign_out
    render json: { message: ["signed out"] }
  end
end
