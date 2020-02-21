class Post < ApplicationRecord
  belongs_to :user

  validates :title, presence: true, length: {maximum: 255}
  validates :content, presence: true

  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user, dependent: :destroy

end
