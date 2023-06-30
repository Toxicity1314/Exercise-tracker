# Exercise Tracker

This is a full-stack web application built using React, Ruby on Rails, Puma, Bcrypt, PostgreSQL, React-Router-DOM, and Semantic-UI. The application allows users to track their workout progress, log their exercises, and monitor their progress over time.

## Features

-User registration and authentication
-Create, update, and delete workouts
-Automatically increase reps and weights for each individual exercise based on the user's past performance
-View past workout history and progress

Prerequisites

-Node.js
-Ruby
-Rails
-PostgreSQL

## Installation

1. Clone the repository

> git clone https://github.com/YOUR-USERNAME/Exercise-tracker.git

2. Install dependencies

> bundle install
> npm install --prefix client

3. migrate and seed the database

>rails db:migrate
>rails db:seed

4. Start the rails server

>rails s

5. start the react server

>npm start --prefix client

## Usage

- Start by registering a new account or log in with an existing account
- View workout selection in the workout selection tab
- Click on workout name to view exercises associated with that workout
- Start a new workout by clicking the "Start Workout" button
- If you successfully complete the entire set for an exercise click the successful button if not 
click unsuccessful button
- once all exercises are complete click completed button
- App will automatically increase rep and or weight for an exercise the next time a user does that exercise if user was successful on the previous itteration
- View past workout history and progress by clicking the "previous workout" button



## API Endpoints
### Users
- POST /users: Create a new user. expects { username: , password: }
- GET /users/:id: Retrieve a specific users workouts.
```json 
{
    "id": 1,
    "workouts": [
        {
            "id": ,
            "name": ,
            "completed_at": 
        },
    ]
}
```
- GET /auth: Retrieve the authenticated user.
### Workouts
- POST /workouts: Create a new workout. expects { name: workout.name, id: workout.id }
- GET /workouts: Retrieve all completed workouts for the authenticated user. returns
```json
[
    {
        "id": ,
        "name": ,
        "completed_at": ,
        "exercises": [
            {
                "id": ,
                "blueprint_id": ,
                "name": ,
                "pic_url": ,
                "workout_id": ,
                "instructions": ,
                "exercise_sets": [
                    {
                        "id": ,
                        "reps": ,
                        "weight": ,
                        "completed_at":
                    },]
            },
                ]
            }
        ]
  ```
- GET /current_workout Retrieve the current workout for the authenticated user. returns 
```json
{
    "id": ,
    "name": ,
    "completed_at": ,
    "exercises": [
        {
            "id": ,
            "blueprint_id": ,
            "name": ,
            "pic_url": ,
            "workout_id": ,
            "instructions": ,
            "exercise_sets": [
                {
                    "id": ,
                    "reps": ,
                    "weight": ,
                    "completed_at":
                },
            ]
        }
    ]
}
```
- PATCH /workouts/:id: Update a specific workout. expects { completed_at: newCompletedAt }
- DELETE /workouts/:id: Delete a specific workout.
### Exercise Sets
- PATCH /exercise_sets/:id: Update a specific exercise set. expects { completed_at: newCompletedAt }
### Blueprints
- GET /blueprints: Retrieve all blueprints.
```json
[
    {
        "id": ,
        "name": ,
        "exercises": [
            {
                "id": ,
                "blueprint_id": ,
                "name": ,
                "pic_url": ,
                "workout_id": ,
                "instructions": 
            },
        ]
      }
  ]
  ```
### Sessions
- POST /login: Authenticate user credentials and create a session.
- DELETE /logout: Terminate the current session.
## Authentication
- Authentication is required for most of the endpoints in this API. The authentication mechanism relies on sessions and cookies. The user's session is established upon successful login, and the session ID is stored in a cookie. Subsequent requests should include the session cookie for authentication.

## Error Handling
- The API provides basic error handling for common scenarios:
- If a record is not found, the API returns a JSON response with a 404 Not Found status code.
- If a record is invalid, the API returns a JSON response with a 422 Unprocessable Entity status code, including an array of error messages.
- If a user is not authorized, the API returns a JSON response with a 401 Unauthorized status code.
## API Structure
The API is built using the Ruby on Rails framework. Here's a brief overview of the main components:
- routes.rb: Defines the API routes using the Rails routing DSL.
- ApplicationController: Serves as the base controller for all other controllers and includes common functionality like session authorization and error handling.
- BlueprintsController: Handles requests related to blueprints, specifically retrieving all blueprints.
- ExerciseSetsController: Handles requests to update exercise sets.
- FallbackController: Handles requests for non-API routes and serves the public/index.html file.
- SessionsController: Handles user authentication and session management.
- UsersController: Handles user-related requests, including user creation, retrieval, and authentication.
- WorkoutsController: Handles requests related to workouts, including creation, retrieval, updating, and deletion.