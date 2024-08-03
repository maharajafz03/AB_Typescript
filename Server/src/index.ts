import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());

// Define a schema and model
const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

interface IData {
  name: string;
  email: string;
}

const DataModel = mongoose.model<IData>('Data', dataSchema);

// POST route to save data
app.post('/api/data', async (req: Request, res: Response) => {
  try {
    const data = new DataModel(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// import express, { Request, Response, Router } from 'express';
// import path from 'path';

// const app = express();

// const port = 20000;

// app.use(express.static(path.join(__dirname, '../../client/dist')));


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
// });


// app.listen(port, () => {
//     console.log("app is running on port")
// });

