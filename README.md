# Todo List App

## Overview

This is a Todo List application built with React. It allows users to create, view, update, and delete tasks. Users can also register and log in to manage their tasks securely.

## Features

- **User Authentication:** Register and log in to manage your tasks.
- **Todo Management:** Add, edit, delete, and mark tasks as completed.
- **Responsive Design:** Works well on both desktop and mobile devices.
- **Client-Side Routing:** Navigate between different pages without refreshing.

## Screenshots

### Home Page

![image](https://github.com/user-attachments/assets/1f41622e-f2f3-453a-aaee-97c00656d239)

### Registration Page

![image](https://github.com/user-attachments/assets/eb77bd35-a610-4f06-b330-76201655f2cc)

### Login Page

![image](https://github.com/user-attachments/assets/1f41622e-f2f3-453a-aaee-97c00656d239)

### Todo List

![image](https://github.com/user-attachments/assets/e52b66b7-6023-4324-8ca0-68740996bfd6)
![image](https://github.com/user-attachments/assets/c7686807-3e72-4eed-addf-8a824b904341)
![image](https://github.com/user-attachments/assets/7df78359-fe7c-48ce-9aa7-76ab98ed4ca0)


## Tech Stack

- **Frontend:** React, React Router, Material-UI
- **State Management:** React Context API
- **Form Handling:** Formik, Yup
- **Styling:** CSS-in-JS with Material-UI

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/NelushGayashan/TODO_List_App.git
    ````
2. **Navigate to the Project Directory:**
    ```bash
    cd TODO_List_App
   ````

3. **Install Dependencies:**
    ```bash
    yarn install
   ````

3. **Start the Development Server:**
    ```bash
    yarn start
   ````

The app will be available at http://localhost:3000.

## Usage

- **Registration:** Navigate to `/register` to create a new account.
- **Login:** Navigate to `/login` to access your account.
- **Todo List:** After logging in, you can manage your todos on the main page.


## Folder Structure

```plaintext
src/
│
├── components/            # React components
│   ├── Auth/               # Authentication related components (Login, Register)
│   │   ├── Login.js
│   │   └── Register.js
│   └── Todo/               # Todo list related components (TodoList, AddTodo)
│       ├── AddTodo.js
│       ├── EditTodo.js
│       ├── TodoItem.js
│       └── TodoList.js
│
├── context/                # React Context providers (AuthContext, TodoContext)
│   ├── AuthContext.js               
│   └── TodoContext.js
├── App.css                 # Global CSS styles
└── App.js                  # Main application file

```

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- React and Material-UI for the frontend framework and styling.
- Formik and Yup for form handling and validation.
- React Router for client-side routing.
