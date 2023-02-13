class CreateExersices < ActiveRecord::Migration[7.0]
  def change
    create_table :exersices do |t|
      t.string :name
      t.string :instructions

      t.timestamps
    end
  end
end
