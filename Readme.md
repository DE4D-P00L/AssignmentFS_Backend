# Assignment API

- [Backend Live Preview](https://assignmentfs-backend.onrender.com/ping)
  | [Backend Code](https://github.com/DE4D-P00L/AssignmentFS_Backend.git)
- [Frontend Live Preview](https://assignmentfs-frontend.onrender.com/)
  | [Frontend Code](https://github.com/DE4D-P00L/AssignmentFS_Frontend.git)

## Description:

This Node.js Express project provides a RESTful API for managing cards. It uses Mongoose for MongoDB interactions, CORS for cross-origin requests, dotenv for environment variables, Zod for data validation, and Nodemon for development convenience. The API includes endpoints for creating, retrieving, and searching cards.

### Prerequisites:

- Node.js (v18 or later)
- npm or yarn

### Installation:

1. Clone the repository:

```bash
    git clone https://github.com/DE4D-P00L/AssignmentFS_Backend.git
```

2. Install dependencies:

```bash
    npm install
```

### Environment Variables:

Create a `.env` file in the project root and add the following environment variable:

```
    MONGO_URI=your-mongodb-uri
    FRONTEND_URL=your-frontend-url
```

Replace your-mongodb-uri with your actual MongoDB connection string and your-frontend-url with your front domain or add http://localhost:5173 in case of development server.

### Usage:

Start the server:

```bash
    npm run dev
```

### Endpoints:

- GET /ping:
  - Returns a JSON response with a message indicating the API is up and running.
- GET /cards:
  - Returns a list of all cards.
- POST /cards:
  - Creates a new card with the provided title and description.
    Requires a JSON body with the following properties:
    title (string)
    description (string)
- GET /cards/:title:
  - Returns a list of cards with titles matching the provided parameter.

### Technologies Used:

Node.js,
Express,
Mongoose,
CORS,
dotenv,
Zod,
Nodemon
