## Instructions on how to run the application locally

1. **Clone or download the repository:**
   - First you clone the repository .
    
   - Or download the repository .

2. **Open the project:**
   - Open the project directory.

3. **Install packages:**
   - Open a command terminal or Git Bash to run the following command to install all necessary packages:
     ```
     npm install
     ```

4. **Set up environment variables:**
   - Create a `.env` file in the root of the project.
   - Add the following environment variables in the `.env` file:
     ```
     PORT=5000
     DB_URL=mongodb+srv://username:password@cluster0.25fgudl.mongodb.net/productManagement?retryWrites=true&w=majority&appName=Cluster0
     ```
     Replace `username` and `password` with your MongoDB `username` and `password`.

5. **Run the application:**
   - Open a terminal in the project directory and run the following command to start the project:
     ```
     npm run start:dev
     ```
   - Your project should now be running.

