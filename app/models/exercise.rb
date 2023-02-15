class Exercise < ApplicationRecord
    belongs_to :blueprint
    has_many :reps
end
