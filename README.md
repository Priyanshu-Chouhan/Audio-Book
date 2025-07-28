# Audiobook Platform

## Overview
A full-stack application for browsing, streaming, and managing audiobooks.

## Project Structure
├── backend/      # Node.js & Express REST API  
├── frontend/     # React single-page application  
├── .gitignore    # Git ignore rules  
└── README.md     # Project documentation  

## Prerequisites
- Node.js v14+  
- npm v6+  
- Git  

## Installation
1. Clone the repo:  
   ```
   git clone https://github.com/your-username/your-repo.git
   cd audiobook-platform
   ```

## Backend Setup
1. Navigate to `backend`:  
   ```
   cd backend
   ```
2. Install dependencies:  
   ```
   npm install
   ```
3. Create a `.env` file with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/audiobook
   ```
4. Start the server:
   ```
   npm start
   ```

## Frontend Setup
1. Navigate to `frontend`:  
   ```
   cd frontend
   ```
2. Install dependencies:  
   ```
   npm install
   ```
3. Create a `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```
4. Run the development server:
   ```
   npm start
   ```

## Deployment
- See `frontend/README.md` for front-end deployment instructions.  
- Host the backend on Railway, Heroku, or Render and configure your environment variables.

## Contributing
Pull requests are welcome. Please open issues for bugs and feature requests.

## License
MIT © Your Name# Audoi-Book
# Audio-Book
