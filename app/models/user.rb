class User < ApplicationRecord
    has_many :workouts
    has_secure_password
    validates :username, presence: true
end
