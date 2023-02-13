Rails.application.routes.draw do
  resources :user_exersices
  resources :exersices
  resources :workouts
  resources :users, only:[:show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "logout", to: "sessions#destroy"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
