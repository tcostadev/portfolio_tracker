@echo off
:: Navigate to the frontend directory and run npm start in a new window
cd C:\GIT\portfolio_tracker\frontend
start cmd /k "npm run start"

:: Navigate to the backend directory and run the server
cd C:\GIT\portfolio_tracker\backend
node server.js

:: Keep the console open after running
pause
