class Workout < ApplicationRecord
  belongs_to :user
  has_many :exercises, -> { order(:id) }, dependent: :destroy
  has_many :exercise_sets, through: :exercises
end
