# User Dashboard Application

A simple React application with a login page and a dashboard that displays a list of users.
The dashboard includes search functionality and user detail views.

## Features

- Login Page: Users can log in with mock credentials.
- Dashboard: Displays a list of users with search and detail view capabilities.
- Search Functionality: Users can search the list by name or email.
- User Details: View detailed information for a selected user.
- Logout: Return to the login page.

## Prerequisites

- Node.js (v14 or higher)
- Yarn (or npm)

### Getting Started

#### Clone the Repository

```bash
git clone https://github.com/natthawutgeng05/user-directory-app-test.git
cd user-directory-app-test
```

### Install Dependencies

```bash
yarn install
```

### Start the Development Server

```bash
yarn start
```

Visit <http://localhost:3000> in your browser to view the application.

## File Structure

- `src/`
  - `components/` Contains reusable React components.
    - `LoginPage.tsx` - The login page component, responsible for user authentication.
    - `Dashboard.tsx` - The dashboard component that displays a list of users and their details.
    - `Navbar.tsx` - The navigation bar component that includes a welcome message and logout functionality.
    - `ProtectedRoute.tsx` - A higher-order component that restricts access to certain routes based on authentication status.
  - `context/` Contains context providers for state management.
    - `AuthContext.tsx` - The context provider for managing authentication state (login/logout) across the application.
- `App.tsx`- The main application component that sets up routing and wraps components with necessary providers.
- `index.tsx` - The entry point for the React application that renders the App component.
- `theme.tsx` - Theme configuration for Material-UI, including custom breakpoints and styles.

## Components

### LoginPage

A form where users can log in using mock credentials. On successful login, the user is redirected to the dashboard.

- Fields: Username, Password
- Actions: Login, Clear Error Message

### Dashboard

Displays a list of users that can be filtered by name or email. Users can click on a user to view their details.

- Fields: User List (with name, email)
- Actions: Search, View User Details, Clear Search, Logout

## Technologies Used

- React
- React Router DOM
- Material-UI
- TypeScript

## Example

Here's a quick example of how the login and dashboard pages look and function:

- Login Page: Enter admin as username and password as password to access the dashboard.
- Dashboard: Search for users by name or email, click on a user to see more details, and log out to return to the login page.

## Troubleshooting

- Issues with Dependencies: Ensure that all dependencies are correctly installed using `yarn install`.
- Server Errors: Check the console for errors and ensure the development server is running.
