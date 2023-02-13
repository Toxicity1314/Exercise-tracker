class UserExersice < ApplicationRecord
  belongs_to :workout
  belongs_to :exersice
  belongs_to :user
end
