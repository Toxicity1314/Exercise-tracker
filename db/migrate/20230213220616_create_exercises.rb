class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :instructions
      t.belongs_to :blueprint, null: false, foreign_key: true

      t.timestamps
    end
  end
end
