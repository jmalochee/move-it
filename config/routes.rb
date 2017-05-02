Rails.application.routes.draw do
  root 'static_pages#index'

  get '/register' => 'static_pages#index'
  get '/login' => 'static_pages#index'

  resources :users, only: [ :create ]
end
