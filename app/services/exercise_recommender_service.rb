class ExerciseRecommenderService
  attr_reader :client

  def initialize
    @client = OpenAI::Client.new
  end

  def recommend_next_exercise(current_exercises)
    response =
      @client.chat(
        parameters: {
          model: "gpt-3.5-turbo",
          messages: messages(current_exercises)
        }
      )

    body = JSON.parse(response["choices"][0]["message"]["content"])

    return body["name"], body["instructions"]
  end

  def messages(current_exercises)
    exercise_names = current_exercises.pluck(:name).join(", ")

    return [
      {
        "role" => "system",
        "content" =>
          "You will be provided a list of exercise names. Your task is to suggest the next exercise to do. Make the response in the JSON format: {\"name\": \"exercise name\",  \"instructions\": \"exercise instructions\"}."
      },
      {
        "role" => "user",
        "content" =>
          "My current exercises are: #{exercise_names}. What should my next exercise be?"
      }
    ]
  end

  # def functions
  #   [
  #     {
  #       "name" => "suggest_next_exercise",
  #       "description" => "Suggest the next exercise to do",
  #       "parameters" => {
  #         "type" => "object",
  #         "properties" => {
  #           "workout_name" => {
  #             "type" => "string",
  #             "description" => "name of the workout"
  #           },
  #           "current_exercises" => {
  #             "type" => "array",
  #             "items" => {
  #               "type" => "object",
  #               "properties" => {
  #                 "name" => {
  #                   "type" => "string",
  #                   "description" => "name of the exercise"
  #                 },
  #                 "instructions" => {
  #                   "type" => "string",
  #                   "description" => "instructions for the exercise"
  #                 }
  #               }
  #             }
  #           }
  #         }
  #       },
  #       "returns" => {
  #         "type" => "object",
  #         "properties" => {
  #           "name" => {
  #             "type" => "string",
  #             "description" => "name of the exercise"
  #           },
  #           "instructions" => {
  #             "type" => "string",
  #             "description" => "instructions for the exercise"
  #           }
  #         }
  #       }
  #     }
  #   ]
  # end
end
