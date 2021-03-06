class Api::V1::UsersController < ApplicationController
  helper_method :current_user, :user_signed_in

  def update
    body = request.body.read
    parsed = JSON.parse(body)
    user = User.find(params[:id])
    if user.update(parsed)
      render json: { message: ["update successful!"], current_user: current_user }
    else
      return root_path
    end
  end

  def currentUser
    render json: current_user
  end
end
