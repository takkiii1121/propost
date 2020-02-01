Rails.application.routes.draw do
  root 'api/v1/users#index'
  namespace 'api' do
      namespace 'v1' do
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
              post :likes, to: 'likes#create'
              delete :likes, to: 'likes#destroy'
            end
          end
      end
  end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
