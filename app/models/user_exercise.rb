class UserExercise < ApplicationRecord
  belongs_to :exercise
  belongs_to :user

  def self.current_workout_id
    exercise = self.order(:workout_number).last
    exercise ? exercise = exercise[:workout_number] : exercise = 0
  end
  
  def self.generate_weight exercise, user
    
    last_weight = self.where(user_id: user, exercise_id: exercise).order(:workout_number)
    if last_weight.last
      last_weight = last_weight.last
      last_weight = last_weight[:weight] +=2.5
    else
      last_weight = 5
    end
    
    last_weight
  end
end
