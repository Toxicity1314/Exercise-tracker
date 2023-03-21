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