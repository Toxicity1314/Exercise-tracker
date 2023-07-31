import { RawCurrentWorkout, CurrentWorkout } from "./types";

export function translateRawCurrentWorkout(
  rawCurrentWorkout: RawCurrentWorkout
): CurrentWorkout {
  return {
    id: rawCurrentWorkout.id,
    name: rawCurrentWorkout.name,
    exercises: rawCurrentWorkout.exercises.map((rawCurrentExercise) => {
      return {
        id: rawCurrentExercise.id,
        name: rawCurrentExercise.name,
        blueprintId: rawCurrentExercise.blueprint_id,
        instructions: rawCurrentExercise.instructions,
        workoutId: rawCurrentExercise.workout_id,
        // Map exercise sets, then order by id (ascending)
        exerciseSets: rawCurrentExercise.exercise_sets.map((rawExerciseSet) => {
          return {
            id: rawExerciseSet.id,
            reps: rawExerciseSet.reps,
            weight: rawExerciseSet.weight,
            completedAt: rawExerciseSet.completed_at,
          };
        }).sort((a, b) => a.id - b.id),
        picUrl: rawCurrentExercise.pic_url,
      };
    }),
    completedAt: rawCurrentWorkout.completed_at,
  };
}
