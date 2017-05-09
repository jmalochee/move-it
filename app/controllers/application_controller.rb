class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def report(output) # returns .full_messages in hash paired with original keys
    i = 0
    report = {}
    output.each do |k,v|
      report[k] = output.full_messages[i]
      i += 1
    end
    report
  end

  def current_user
    if session[:user_id]
      current_user ||= User.find(session[:user_id])
    end
  end

  def sign_in(user)
    session[:user_id] = user.id
  end

  def sign_out
    session.delete(:user_id)
    @current_user = nil
  end

  def user_signed_in?
    !current_user.nil?
  end

end
