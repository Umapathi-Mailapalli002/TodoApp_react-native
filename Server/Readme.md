# TodoApp Backend

This is the backend for a basic TodoApp with CRUD operations.

## Features

- Create a new todo item
- Read all todo items
- Update an existing todo item
- Delete a todo item

## Requirements

- Node.js
- Express.js
- MongoDB

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/TodoApp.git
    ```
2. Navigate to the backend directory:
    ```sh
    cd TodoApp/backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

- **Create a new todo**
    ```http
    POST /todos
    ```
    - Request body:
        ```json
        {
            "title": "New Todo",
            "description": "Todo description"
        }
        ```

- **Read all todos**
    ```http
    GET /todos
    ```

- **Update a todo**
    ```http
    PATCH /todos/:id
    ```
    - Request body:
        ```json
        {
            "title": "Updated Todo",
            "description": "Updated description"
        }
        ```

- **Delete a todo**
    ```http
    DELETE /todos/:id
    ```

## License

This project is licensed under the MIT License.