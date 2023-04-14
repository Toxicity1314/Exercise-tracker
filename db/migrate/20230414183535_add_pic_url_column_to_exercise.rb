class AddPicUrlColumnToExercise < ActiveRecord::Migration[7.0]
  def change
    change_table :exercises do |t|
    t.string :pic_url
    end
  end
end
