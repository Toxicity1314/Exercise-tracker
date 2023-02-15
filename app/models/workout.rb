class Workout < ApplicationRecord
    belongs_to :user
    has_many :reps
    has_many :exercises, through: :reps
end
