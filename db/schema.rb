# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_13_220748) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exersices", force: :cascade do |t|
    t.string "name"
    t.string "instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_exersices", force: :cascade do |t|
    t.bigint "workout_id", null: false
    t.bigint "exersice_id", null: false
    t.bigint "user_id", null: false
    t.integer "weight"
    t.integer "reps"
    t.boolean "success"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["exersice_id"], name: "index_user_exersices_on_exersice_id"
    t.index ["user_id"], name: "index_user_exersices_on_user_id"
    t.index ["workout_id"], name: "index_user_exersices_on_workout_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.string "name"
    t.string "muscle_groups"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_exersices", "exersices"
  add_foreign_key "user_exersices", "users"
  add_foreign_key "user_exersices", "workouts"
end
