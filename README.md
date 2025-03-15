# Node.js API Microservice Starter Kit 🚀

## Overview 🌐
This project is a comprehensive Node.js starter kit for building backend API microservices. It provides a solid foundation with a modular architecture, database integration, messaging system, and RESTful API endpoints, allowing developers to quickly bootstrap and develop robust microservices for various business domains.

## Features ✨
- RESTful API architecture with Express.js
- MongoDB integration using Mongoose ODM
- Kafka/Redpanda integration for event-driven architecture
- Structured logging system
- CORS support for cross-origin requests
- Comprehensive error handling
- Cron job scheduling
- Environment-based configuration
- Modular project structure

## Installation 🛠️
1. Clone the repository:
   ```
   git clone https://github.com/nivkman/node-api-starter-kit.git
   ```
2. Navigate to the project directory:
   ```
   cd node-api-starter-kit
   ```
3. Install dependencies:
   ```
   npm install
   ```

Note: Ensure you have Node.js (v14.x or later) and npm installed on your system before proceeding with the installation.

## Configuration ⚙️
1. Create a `.env` file in the root directory
2. Add the following environment variables:
   ```
   DATABASEURL=mongodb://localhost:27017
   PORT=9090
   SERVICE=MyNewService
   KAFKA_BROKER_ADDRESS=localhost:9092
   KAFKA_BROKER_ADDRESS_PROD=redpanda:29092
   GROUP_ID=my-service-group
   TOPIC=lce.pipeline
   GROUP_TYPE=service-type
   ```

   Note: 
   - For local development, use `KAFKA_BROKER_ADDRESS`.
   - For production, use `KAFKA_BROKER_ADDRESS_PROD`.
   - Customize `SERVICE`, `GROUP_ID`, and `GROUP_TYPE` based on your specific microservice requirements.

## Usage 🚀
To start the server:
```
npm start
```

The API will be available at `http://localhost:9090` (or the port you specified in your .env file).

## Project Structure 📂
```
.
├── src/
│   ├── config/         # Configuration files
│   ├── cron/           # Scheduled tasks
│   ├── messaging/      # Kafka message handlers
│   ├── models/         # Database models
│   ├── routes/         # API route definitions
│   ├── services/       # Business logic
│   └── index.js        # Main application entry point
├── .env                # Environment variables (create this)
├── .gitignore
├── package.json
└── README.md
```

## API Documentation 📚

### Endpoints 🛣️

1. **Health Check** 💓
   - Method: GET
   - Path: `/api/v1/health`
   - Description: Check the health status of the API
   - Response: "health checked successfully"

2. **Get All Resources** 📋
   - Method: GET
   - Path: `/api/v1/`
   - Description: Retrieve all resources based on provided filters
   - Query Parameters: 
     - `filter`: JSON string for filtering resources
     - `limit`: Number of resources to retrieve (default: 25)
     - `skip`: Number of resources to skip (for pagination)
     - `sort`: Sorting criteria
   - Response: JSON array of resource objects

3. **Get Resource by ID** 🔍
   - Method: GET
   - Path: `/api/v1/:id`
   - Description: Retrieve a specific resource by its ID
   - Response: JSON object of the resource

4. **Create New Resource** ➕
   - Method: POST
   - Path: `/api/v1/`
   - Description: Create a new resource
   - Request Body: Resource details
   - Response: JSON object of the created resource

5. **Update Resource** 🔄
   - Method: PUT
   - Path: `/api/v1/:id`
   - Description: Update an existing resource
   - Request Body: Updated resource details
   - Response: JSON object of the updated resource

6. **Delete Resource** ❌
   - Method: DELETE
   - Path: `/api/v1/:id`
   - Description: Delete a resource by its ID
   - Response: JSON object with the deleted resource ID

### Error Handling ⚠️

All endpoints include error handling. In case of an error, the service logs the error message using the structured logging system. You can extend this to emit corresponding failure events through Kafka if needed.

## Architecture 🏗️
The application follows a modular architecture:

- Express.js for the web server 🌐
- MongoDB for data storage (using Mongoose ODM) 🗄️
- Kafka or Redpanda for event-driven messaging 📨
- Custom logging system 📝
- Node-cron for scheduled tasks ⏰

### Service Layer 🛠️

The service layer handles all business logic and database operations:
- Retrieving resources with filtering, pagination, and sorting
- Creating new resources
- Updating existing resources
- Deleting resources

It interacts with the MongoDB database through the Mongoose models and can be extended to emit events to Kafka for important lifecycle events.

## Extending the Starter Kit 🔧

### Adding a New Model
1. Create a new model file in `src/models/`
2. Define your schema and export your model
3. Import and use it in your service layer

### Adding a New Service
1. Create a new service file in `src/services/`
2. Implement the necessary methods for your business logic
3. Instantiate and use it in your route handlers

### Implementing Event-Driven Architecture
1. Uncomment the Kafka initialization in `src/index.js`
2. Define your events and handlers in `src/messaging/`
3. Emit events from your services when needed

## Contributing 🤝
Contributions are welcome! Please feel free to submit a Pull Request.

## License 📝
This project is licensed under the ISC License - see the LICENSE file for details.

---

Happy coding! 💻✨