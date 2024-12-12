# Node.js Book Management Project

## Introduction
This project is a Node.js-based application for managing a collection of books. It provides functionalities such as creating, reading, updating, and deleting book records through a RESTful API.

## Features
- **CRUD Operations**: Manage book records.
- **Separation of Concerns**: Uses services and repositories to handle business logic and data persistence.
- **Error Handling**: Provides meaningful error messages and appropriate HTTP response codes.

## Folder Structure
```bash
project-root
├── framework
│   ├── models
│   │   └── book.ts        # Book model definition
│   ├── repository
│       └── book.repo.ts   # Repository for interacting with the database
├── service
│   └── book.service.ts    # Service layer for book operations
├── controller
│   └── book.controller.ts # Controller to handle HTTP requests
├── schemas
│   └── book.schemas.ts    # Type definitions and validation schemas
├── utils
│   └── messages.ts
        # Centralized message constants
└── README.md
```

## Technologies Used
- **Node.js**: Backend runtime.
- **TypeScript**: For static typing.
- **Fastify**: Lightweight and fast web framework.
- **MongoDB**: Database for persisting book data.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd BOOKAPI
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the application:
   ```bash
   npm start
   ```
2. Access the API at `http://localhost:8080`.

## API Endpoints
| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| GET    | `/books`          | Get all books             |
| POST   | `/books`          | Create a new book         |
| GET    | `/books/:id`      | Get a book by ID          |
| PUT    | `/books/:id`      | Update a book by ID       |
| DELETE | `/books/:id`      | Delete a book by ID       |

## Error Handling
Common error responses:
- **500 Internal Server Error**: For unexpected server issues.
- **404 Not Found** : When a book ID does not exist