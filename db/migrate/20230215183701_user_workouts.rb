class UserWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :user_workouts do |t|
      t.belongs_to :workout, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
