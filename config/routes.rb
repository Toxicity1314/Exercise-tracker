Rails.application.routes.draw do
  resources :users, only:[:show, :create]
  resources :workouts, only:[:index]
  resources :blueprints
  resources :exercises
  resources :reps
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # get "/current_workout", to: "user_exercises#current"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
