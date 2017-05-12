Rails.application.routes.draw do
  root 'static_pages#index'



  namespace :api do
    namespace :v1 do
      resources :users, only: [ :index, :show, :create ]
        get '/user', to: 'users#currentUser'
      resources :moves, only: [ :index, :show, :create ]
      resources :sessions, only: [ :new, :create, :destroy ]
    end
  end

  get '/api/v1/home', to: 'api/v1/home#index'

  get '*path', to: 'static_pages#index'
end
