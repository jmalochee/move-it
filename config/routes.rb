Rails.application.routes.draw do
  root 'static_pages#index'



  namespace :api do
    namespace :v1 do
      resources :users, only: [ :index, :show, :create ]
      resources :moves, only: [ :index, :show, :create ]
    end
  end

  get '*path', to: 'static_pages#index'
end
