import { RawCurrentWorkout, CurrentWorkout } from "./types";

export function translateRawCurrentWorkout(rawCurrentWorkout: RawCurrentWorkout): CurrentWorkout {
  return {
    id: rawCurrentWorkout.id,
    name: rawCurrentWorkout.name,
    exercises: rawCurrentWorkout.exercises.map((rawCurrentExercise) => {
      return {
        id: rawCurrentExercise.id,
        blueprintId: rawCurrentExercise.blueprint_id,
        instructions: rawCurrentExercise.instructions,
        workoutId: rawCurrentExercise.workout_id,
        exerciseSets: rawCurrentExercise.exercise_sets.map((rawExerciseSet) => {
          return {
            id: rawExerciseSet.id,
            reps: rawExerciseSet.reps,
            weight: rawExerciseSet.weight,
            completedAt: rawExerciseSet.completed_at
          }
        }),
        picUrl: rawCurrentExercise.pic_url
      }
    }),
    completedAt: rawCurrentWorkout.completed_at
  }
}