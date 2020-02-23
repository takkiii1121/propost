class ApplicationController < ActionController::API
    include ActionController::HttpAuthentication::Token::ControllerMethods
    
    def current_user
        if request.headers['Authorization'].blank?
            @current_user = nil
        else
            @current_user ||= User.find_by(token: request.headers['Authorization'].split[1])
        end
    end

    def create_token
        return ((0..9).to_a + ("a".."z").to_a + ("A".."Z").to_a).sample(50).join
    end

    def count_liked_posts(user)
        @count_posts = user.liked_posts.count
    end

    def count_liked_users(post)
        @count_users = post.liked_users.count
    end

    private

        def authenticate!
            authenticate_or_request_with_http_token do |token, options|
            User.find_by(token: token).present?
        end

        
    end
end
