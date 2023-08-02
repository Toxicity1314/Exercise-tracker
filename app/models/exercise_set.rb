class ExerciseSet < ApplicationRecord
  belongs_to :exercise
  validates :status,
            inclusion: {
              in: %w[successful unsuccessful incomplete],
              message: "%{value} is not a valid status"
            }

  def self.create_exercise_sets(exercise_id, user_id, weight, reps)
    ExerciseSet.create!(
      reps: reps,
      weight: weight,
      exercise_id: exercise_id,
      completed_at: nil,
      user_id: user_id
    )
  end

  def update_status
    if completed_at.present?
      exercise = Exercise.find_by(id: exercise_id)

      if weight >= exercise.weight && reps >= exercise.reps
        update!(status: "successful")
      elsif weight <= exercise.weight || reps <= exercise.reps
        update!(status: "unsuccessful")
      end
    else
      update!(status: "incomplete")
    end
  end

  #Rails automatically has typcasting when assigning values based off of the
  #database schema? When attempting setting completed_at to anything other than
  # a DateTime rails silently stopped the assignment and assinged nil instead
  #This happened before validations so validations were not raising errors to get around this
  #To get around this completed_at= overrides the default attribute writer, tests the value of completed_at
  #if a string value.to_datetime will attempt to convert to a DateTime object. If that fails to_datetime
  # throws an error. Second if statement should catch any other issues(not sure if needed). Finally if
  #all error raising is avoided super(value) sets :completed_at utilizing the default attribute writer
  def completed_at=(value)
    value = value.to_datetime if value.is_a?(String)

    if value.present? && !value.is_a?(DateTime)
      raise ArgumentError, "completed_at must be a valid datetime"
    end

    super(value)
  end
end
