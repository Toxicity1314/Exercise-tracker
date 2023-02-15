class CreateBlueprints < ActiveRecord::Migration[7.0]
  def change
    create_table :blueprints do |t|
      t.string :name

      t.timestamps
    end
  end
end
