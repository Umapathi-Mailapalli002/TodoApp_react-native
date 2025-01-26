# TodoApp

This is a basic TodoApp with CRUD operations using React Native for the frontend and MongoDB, Express.js, and Node.js for the backend.

## Features

- Create a new todo item
- Read all todo items
- Update a todo item
- Delete a todo item

## Technologies Used

- React Native
- MongoDB
- Express.js
- Node.js

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/TodoApp.git
    ```
2. Navigate to the project directory:
    ```sh
    cd TodoApp
    ```

### Backend Setup

3. Install backend dependencies:
    ```sh
    cd Server
    npm install
    ```
4. Create a `.env` file in the `Server` directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    ```
5. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

6. Install Client dependencies:
    ```sh
    cd ../Client
    npm install
    ```
7. Start the React Native app:
    ```sh
    npm start
    ```

## Usage

1. Open the React Native app on your device or emulator.
2. Use the app to create, read, update, and delete todo items.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.