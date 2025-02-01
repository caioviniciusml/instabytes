# AI-Powered REST API for Post Creation with Image Upload and Automated Descriptions

This project is a RESTful API built with Node.js and Express, designed to handle CRUD operations for posts, similar to Instagram’s posting system. The API integrates Multer for image upload handling, MongoDB as the database, and Google Gemini AI to automatically generate descriptive captions and alt text for images before storing them.

## Installation and Setup
### Clone the Repository

`git clone https://github.com/caioviniciusml/instabytes.git`
`cd instabytes`

### Install Dependencies

`npm install`

### Set Up Environment Variables

Create a .env file in the root directory and add the following environment variables:

`GEMINI_API_KEY= <your_gemini_api_key>
MONGODB_CONNECTION= <your_mongodb_connection_string>`

Replace your_gemini_api_key and your_mongodb_connection_string with your actual credentials.

### Configure MongoDB

1. Sign up at MongoDB Atlas (or use a local MongoDB instance).
2. Create a new cluster and obtain your MongoDB connection string.
3. In the cluster, create a database and a collection named posts.

### Run the API

`npm run dev`

Now, your API is up and running! You can start making requests to create, retrieve, update, and delete posts.

## Key Features

* Full REST API Implementation: Supports creating, reading, updating, and deleting posts, following RESTful principles.
* Image Upload Handling: Uses Multer to manage file storage and process uploaded images efficiently.
* AI-Generated Content: Integrates with Google Gemini AI to generate meaningful descriptions and alt text, improving accessibility and engagement.
* Database Integration: Stores posts and metadata in MongoDB, ensuring structured and scalable data management.
* Middleware & Security: Implements middleware for error handling, validation, and security best practices.

## Workflow

* Image Upload – The user uploads an image, which is processed by Multer.
* AI Processing – The image is sent to Gemini AI, which generates a descriptive caption and alt text.
* Data Storage – After receiving the AI-generated details, the post (image, description, alt text) is stored in MongoDB.
* CRUD Operations – The API allows users to retrieve, update, or delete posts as needed.
