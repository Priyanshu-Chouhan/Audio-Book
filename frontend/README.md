# Audiobook Platform (Frontend)

The Audiobook Platform frontend is built with Create React App and provides a user interface for browsing, streaming, and managing audiobooks.

## Prerequisites

- Node.js >=14  
- npm >=6  

## Installation

1. Clone the repo and navigate to the `frontend` directory:
   ```
   git clone https://github.com/your-username/your-repo.git
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Configuration

Create a `.env` file in the `frontend` folder with the following variables:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Available Scripts

In the `frontend` directory, you can run:

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

- Deploy the `build` folder to any static hosting service (e.g., Vercel, Netlify).  
- Set the `REACT_APP_API_URL` environment variable in your hosting dashboard to point to your backend URL.

## Learn More

This project was bootstrapped with Create React App. See the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for more information.
