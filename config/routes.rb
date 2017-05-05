Rails.application.routes.draw do
  root 'static_pages#index'



  namespace :api do
    namespace :v1 do
      get 'home', to: 'users#show'
      resources :users, only: [ :index, :show, :create ]
    end
  end

  get '*path', to: 'static_pages#index'
end
