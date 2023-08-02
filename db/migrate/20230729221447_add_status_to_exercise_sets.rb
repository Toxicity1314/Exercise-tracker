class AddStatusToExerciseSets < ActiveRecord::Migration[7.0]
  def up
    add_column :exercise_sets, :status, :string, default: "incomplete"

    ExerciseSet.reset_column_information

    ExerciseSet.find_each do |exercise_set|
      if exercise_set.completed_at.present?
        exercise = Exercise.find_by(id: exercise_set.exercise_id)

        if exercise_set.weight >= exercise.weight &&
             exercise_set.reps >= exercise.reps
          exercise_set.update!(status: "successful")
        elsif exercise_set.weight <= exercise.weight ||
              exercise_set.reps <= exercise.reps
          exercise_set.update!(status: "unsuccessful")
        end
      end
    end
  end

  def down
    remove_column :exercise_sets, :status
  end
end
