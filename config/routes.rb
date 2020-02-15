Rails.application.routes.draw do
  resources :users do
    member do
      get :like
    end
  end
  post '/login', to: 'login#login'
  post '/logout', to: 'login#logout'
  get '/me', to: 'users#me'
          
  resources :posts do
    member do
      get :liked
    end
  end

  post '/like', to: 'likes#create'
  post '/unlike', to: 'likes#destroy'
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
