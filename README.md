# My-Wallet Backend 

This is the backend for a digital wallet application. The application allows users to perform financial transactions, check their balances, and view transaction history.

## Check the Deploy here

[]()

## Project Structure

The project follows a modular structure with separate routers, controllers, services, and repositories for users and transactions.

-   **User Routes:** Defined in `user.router`

    -   `POST /signup`: User registration
    -   `POST /signin`: User authentication

-   **Transaction Routes:** Defined in `transaction.routes.js`
    -   `POST /transation`: New transaction
    -   `GET /transation`: Get transaction history

## Getting Started


### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/WillyanAlmeida/My-Wallet-API

    ```

2. Install dependecies:

    ```bash
    cd My-Wallet-API
    npm install

    ```

3. Configure your environment variables follow env.example

   
  

## Running the Server

Start the server using the following command:

  ```bash
    npm run dev
  ```

The server will be accessible at `http://localhost:4000`.

## API Documentation

### User Routes

#### 1. User Registration

-   **Endpoint:** `POST /signup`
-   **Description:** Register a new user.
-   **Request Body:**
    -   `name` (string): User's name.
    -   `email` (string): User's email.
    -   `password` (string): User's password.
-   **Example:**

    ```json
    {
    	"name": "Willy",
    	"email": "willy@example.com",
    	"password": "securepassword"
    }
    ```

-   **Status Codes:**
    -   `201 Created`: User registration successful.
    -   `409 Conflict`: User with the provided email already exists.
    -   `422 Unprocessable Entity`: Invalid request format or missing required fields.

#### 2. User Authentication

-   **Endpoint:** `POST /signin`
-   **Description:** Authenticate a user.
-   **Request Body:**
    -   `email` (string): User's email.
    -   `password` (string): User's password.
-   **Example:**
    ```json
    {
    	"email": "willy@example.com",
    	"password": "securepassword"
    }
    ```
-   **Status Codes:**
    -   `200 OK`: Authentication successful.
    -   `401 Unauthorized`: Incorrect password.
    -   `404 Not Found`: Email not found.

### Transaction Routes

#### 1. New Transaction

-   **Endpoint:** `POST /transation`
-   **Description:** Create a new transaction.
-   **Request Headers:**
    -   `Authorization` (string): User's authorization token, format: `Bearer Token`
-   **Request Body:**
    -   `value` (number): Transaction amount.
    -   `description` (string): Transaction description.
    -   `type` (string): Transaction type (e.g., "in" or "out").
-   **Example:**
    ```json
    {
    	"value": 50.0,
    	"description": "lanch",
    	"type": "expense"
    }
    ```
-   **Status Codes:**
    -   `201 Created`: Transaction created successfully.
    -   `401 Unauthorized`: Invalid or missing authorization token.
    -   `422 Unprocessable Entity`: Invalid request format or missing required fields.

#### 2. Get Transaction History

-   **Endpoint:** `GET /transation`
-   **Description:** Retrieve the transaction history for the authenticated user.
-   **Request Headers:**
    -   `Authorization` (string): User's authorization token, format: `Bearer Token`
-   **Example Response:**
    ```json
    [
    	{
    		"_id": "transaction_id",
    		"value": 50.0,
    		"description": "lanch",
    		"type": "expense",
    		"day": "DD-MM",
    		"name": "Willy"
    	}
    	// Additional transactions...
    ]
    ```
-   **Status Codes:**
    -   `200 OK`: Transaction history retrieved successfully.
    -   `401 Unauthorized`: Invalid or missing authorization token.