# AskCode

## Project Overview

AskCode is a web platform where users can ask questions and provide answers. It offers features for user authentication, posting and managing questions, posting answers, and interacting with questions and answers.

## Technologies Used

- React.js
- Express.js
- Microsoft SQL Server (MSSQL)

## Services

The project consists of two services:

1. Authentication Service: Responsible for user registration, authentication, and authorization.
2. Questions Service: Manages the creation, retrieval, and interaction with questions and answers.

## Preparation Guidelines

To get ready to start building the project, follow these steps:

1. Create a GitHub Repository, add a README, and clone it to your computer.
2. Ensure you have Node.js and Microsoft SQL Server installed and set up.
3. Work with different branches for the various services (Microservices).

## Required Features

1. Users can create an account and log in.
2. Users can post questions.
3. Users can delete the questions they post.
4. Users can post answers.
5. Users can view the answers to questions.
6. Users can accept an answer out of all the answers to their question as the preferred answer.
7. Users can upvote or downvote an answer.
8. Users can comment on an answer.
9. Users can fetch all questions they have ever asked on the platform.
10. Users can search for questions on the platform.
11. Users can view questions with the most answers.

## Challenge 1 - Create UI Templates

### Challenge Summary

Create UI templates for the project using React.js.

### Guidelines

1. Create user stories for setting up the User Interface elements.
2. Design the following pages:
   - User signup and signin pages.
   - Pages to:
     - View a list of recently asked questions on the platform.
     - View a question with all the answers posted for it and add an answer.
     - Post a question.
   - User's profile page, displaying:
     - The number of questions asked.
     - The number of answers given.
     - The list of questions asked by the user with the most answers.
     - The list of recent questions asked by the user.

## Challenge 2: Create API Endpoints

### Tools

- Server-Side Framework: Express.js
- Linting Library: (not specified)
- Testing Framework: (not specified)

### Guidelines

1. Create the following API endpoints:
   - Create user accounts for signing in and out.
   - Get all questions.
   - Get a specific question.
   - Post a question.
   - Delete a question.
   - Post an answer to a question.
   - Mark an answer as preferred.
   - Allow users to upvote or downvote an answer.
   - Allow users to comment on an answer.
   - Allow users to fetch all questions they have ever asked on the platform.
   - Implement a search feature for questions.
   - Implement a feature to view questions with the most answers.

## API Routes

### Authentication Service

#### User Signup and Signin

- `POST /login`: User login.
- `POST /signup`: User registration.

### Questions Service

#### Questions

- `GET /:PageNumber`: Get all questions.
- `POST /`: Post a question.
- `POST /search/:search_value`: Search for questions.
- `GET /most/answers/:PageNumber`: Get questions with the most answers.

#### Answers

- `POST /`: Post an answer.
- `PUT /answer/accepted`: Mark an answer as accepted.
- `GET /question/:question_id/:value`: Get answers to a specific question.
- `POST /answer/vote/:answer_id`: Upvote or downvote an answer.

#### Comments

- `POST /comment`: Add a comment.
- `GET /comment/:answer_id`: Get comments for an answer.

