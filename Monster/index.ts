import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 5000;

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
      }
    }

// Call the function to connect to MongoDB
connectToMongoDB();

// Middleware to parse JSON data
app.use(express.json());

// Define routes
app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

// Start the server
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
