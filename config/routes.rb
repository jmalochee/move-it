Rails.application.routes.draw do
  root 'static_pages#index'

  resources :users, only: [ :create ]

  get '*path', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [ :index, :show, :create ]
    end
  end

end
