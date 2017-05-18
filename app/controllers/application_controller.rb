class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :report

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
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
    rescue ActiveRecord::RecordNotFound
  end
end
