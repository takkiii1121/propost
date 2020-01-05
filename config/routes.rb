Rails.application.routes.draw do
  root 'api/v1/users#index'
  namespace 'api' do
      namespace 'v1' do
          resources :users
          post '/login', to: 'login#login'
          post '/logout', to: 'login#logout'

          resources :posts
      end
  end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
