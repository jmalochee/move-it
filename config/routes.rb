Rails.application.routes.draw do
  root 'static_pages#index'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
end
