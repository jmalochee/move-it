Rails.application.routes.draw do
  root 'static_pages#index'

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]

  namespace :api do
    namespace :v1 do
      resources :users, only: [ :index, :show, :create, :update ]
        get '/user', to: 'users#currentUser'
      resources :moves, only: [ :index, :show, :create, :new, :edit, :update ]
    end
  end

  get '*path', to: 'static_pages#index'
end
