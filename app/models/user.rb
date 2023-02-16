class User < ApplicationRecord
    has_many :workouts
    has_many :reps, through: :workouts
    has_secure_password
    validates :username, presence: true
end
