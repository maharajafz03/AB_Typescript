import  express, { Request, Response }  from "express";
import mongoose from "mongoose";    // mongodb url 'mongodb://127.0.0.1:27017/mydatabase'
import User from './model'

const app = express();
const Port = 5000;

async function DB_conncetion() {
     try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
        console.log("DB_connected");
     } catch (err) {
        console.error(err.message)
        console.log("DB_is not connected")
     }    
}

DB_conncetion()


app.get('/', (req: Request, res: Response) => {
    res.send("hello ")
})


app.post('/hello',async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user)
        res.send("succesfully saved")
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }    
})


app.listen(Port, () => {
    console.log(`app is running on ${Port}`)
})
