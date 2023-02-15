class UserWorkout < ApplicationRecord
    belongs_to :user
    belongs_to :workout
    has_many :user_exercises
  end
  