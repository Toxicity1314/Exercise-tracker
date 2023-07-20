import React, { useEffect, useState } from "react";
import { RawCurrentWorkout, CurrentWorkout } from "./types.ts";
import { translateRawCurrentWorkout } from "./translator.ts";

export default function CurrentWorkoutPage() {
  const [currentWorkout, setCurrentWorkout] = useState<CurrentWorkout | null>(null);

  useEffect(() => {
    if (currentWorkout) {
      return;
    }

    async function fetchCurrentWorkout() {
      const response = await fetch("/current_workout");

      const data = await response.json();

      const currentWorkout = translateRawCurrentWorkout(data);

      setCurrentWorkout(currentWorkout);
    }

    fetchCurrentWorkout();
  });

  return (
    <div>
      <h1>Current Workout</h1>
    </div>
  );
}
