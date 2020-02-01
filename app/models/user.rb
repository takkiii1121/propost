class User < ApplicationRecord


    before_save {self.email = email.downcase}
    validates :name, presence: true, length: {maximum: 50}
    validates :email, presence: true, length: {maximum: 255},
                      format: {with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i},
                      uniqueness: {case_sensitive: false}
    has_secure_password

    has_many :posts, dependent: :destroy
    has_many :likes, dependent: :destroy
    has_many :liked_posts, through: :likes, source: :post

    def favorite(post)
        self.likes.find_or_create_by(post_id: post.id)
    end

    def unfavorite(post)
        like = self.likes.find_by(post_id: post.id)
        like.destroy if like
    end

    def already_liked?(post)
        self.likes.exists?(post_id: post.id)
    end
end
