class CreateUserExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :user_exercises do |t|
      t.belongs_to :exercise, null: false, foreign_key: true
      t.belongs_to :user_workout, null: false, foreign_key: true
      t.float :weight
      t.integer :reps
      t.boolean :success

      t.timestamps
    end
  end
end
