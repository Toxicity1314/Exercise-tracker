class Workout < ApplicationRecord
    belongs_to :user
    has_many :reps, dependent: :destroy
    has_many :exercises, through: :reps

end
