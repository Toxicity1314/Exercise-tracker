class Workout < ApplicationRecord
    belongs_to :user
    has_many :exercises, dependent: :destroy
    has_many :reps, through: :exercises

end
