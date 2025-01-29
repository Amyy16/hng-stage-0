# HNG STAGE 0 TASK

This is a simple public API that returns my email, the current date and time in ISO 8601 format, and a link to the project's GitHub repository. The project was built with Express.js and deployed on vercel.

## Setup (local) Instructions
To run this locally, ensure you have the following installed: <br> 
- Node.js
- npm 
- Express

### Steps
1. Clone the repository:
   
   ```sh
     git clone https://github.com/Amyy16/hng-stage-0.git
     cd hng-stage-0
   ```
2. Install dependencies
   ```sh
     npm install
   ```
3. Create a .env file and specify a port
   ```sh
     PORT = 5000
   ```
4. Start the server
   ```sh
     npm start
   ```
5. Test the API in your browser
   ```sh
     http://localhost:5000
   ```

### API Documentation

  #### Endpoint


#### Example Response
```json
{
  "email": "nwabueze2amarachi@gmail.com",
  "current_datetime": "2025-01-29T15:44:00Z",
  "github_url": "https://github.com/Amyy16/hng-stage-0"
}
```

