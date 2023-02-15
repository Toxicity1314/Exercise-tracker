class UserExercise < ApplicationRecord
  belongs_to :exercise
  belongs_to :user

  def self.current_workout_id
    exercise = self.order(:workout_number).last
    exercise ? exercise = exercise[:workout_number] : exercise = 0
  end
  
  def self.generate_weight exercise, user
    
    last_workout = self.where(user_id: user, exercise_id: exercise).order(:workout_number)
    if last_workout.last
      last_workout = last_workout.last
      last_weight = last_workout[:weight] +=2.5
    else
      last_weight = 5
    end
    
    last_weight
  end
end
