class User < ApplicationRecord
    has_many :workouts
    has_many :exercise_sets, through: :workouts
    has_secure_password
    validates :username, presence: true
end
