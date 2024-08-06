import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express()
const Port = 7000

async function Connection() {
     try {
        await mongoose.connect ('mongodb://127.0.0.1:27017/mydatabase')
        console.log("Connected")
     }
     catch(err) {
        console.log('wasnt connected')
     }
}

Connection()

app.get('/', (req: Request, res: Response) => {
    res.send('hello')
})


app.listen(Port, () => {
    console.log('app is running on correct port')
})