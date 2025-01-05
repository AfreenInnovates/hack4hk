# SustainLink

This is a React.js application using vite.

## Clone the Repository

Always start by cloning the repository to your local machine (do not download the project files directly) using the following command:

```bash
git clone https://github.com/noufalrahim/syncly_fe.git
```

## Setup Instructions

### 1. Install Dependencies

To get started, first install the necessary dependencies:

```bash
npm install
```

if any error occurs, run:

```bash
npm install --legacy-peer-deps
```

### 2. Setup Environmental Variables

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 3. Run the Application

```bash
npm run dev
```

### 5. Test

Copy and paste the url in a browser to verify everything is working fine
[http://localhost:2000
](http://localhost:2000)

## Working with the code

### 1. Branching Strategy

- Always make sure that you are working on a separate branch and not directly on the `main` branch. This will help in keeping the codebase clean and organized.
- Make sure that you have the latest changes from the `main` branch before starting your work. You can do this by running `git pull origin main` while on your branch.
- After you have made changes, commit them to your branch and create a pull request to merge them into the `main` branch.

### 2. Commit Messages

- Write clear and descriptive commit messages that explain the changes you have made.
- Suggestions for commit messages:
  - `feat: Add new feature`
  - `fix: Correct issue with existing feature`
  - `refactor: Restructure code without changing functionality`
  - `docs: Update documentation`
  - `test: Add or update tests`
  - `chore: Update dependencies or configuration`

### 3. Code Style

- Follow the code style guidelines defined in the `.eslintrc` file.
- Run `npm run lint` to check for linting errors and fix them before committing your code.
- Use Prettier to format your code by running `npm run format`.

### 4. Branch Naming

- Use meaningful branch names that describe the feature or issue you are working on.
- Suggestions for branch names:
  - `feature/add-authentication`
  - `fix/fix-bug-in-login`
  - `refactor/update-user-model`

### 5. Pull Requests

- Create a pull request to merge your changes into the `main` branch.
- Assign reviewers to review your code and approve the pull request.

## Project Structure

### public

This folder contains static assets such as images, fonts, and other files that are served directly by the server.

### src

The src folder contains the source code for the React application. It includes components, pages, styles, and other files that make up the frontend of the application.

### src/assets

The assets folder contains static assets such as images, fonts, and other files used in the application.

### src/components

The components folder contains reusable React components that can be used across multiple pages in the application.

### src/hooks

The hooks folder contains custom React hooks that can be used to share logic between components.

### src/lib

The lib folder contains utility functions and other helper code that is used throughout the application.

### src/redux

The redux folder contains the Redux store configuration, reducers, actions, and other files related to state management in the application.

### src/router

The router folder contains the React Router configuration and routes for the application.

Visit Documentation for more information on the project structure.

## Additional Tips

- Version Control: Use Git to track changes and collaborate with others.
- Linting: Ensure your code follows style guidelines by using ESLint and Prettier.
- Debugging: Check your terminal or console for logs to troubleshoot issues.
