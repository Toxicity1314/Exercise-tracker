class CreateUserExersices < ActiveRecord::Migration[7.0]
  def change
    create_table :user_exersices do |t|
      t.belongs_to :workout, null: false, foreign_key: true
      t.belongs_to :exersice, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :weight
      t.integer :reps
      t.boolean :success

      t.timestamps
    end
  end
end
