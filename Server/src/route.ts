import express, { Request, Response, Router } from 'express'
import path from 'path';

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  });


route.get('/home', (req: Request, res: Response) => {
    const filepath = path.join(__dirname, 'public')
    res.sendFile(filepath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status || 500).end(); // Handle error
        }
  });


route.get('/down', (req: Request, res: Response) => {
    res.send('Hello World  /down!');
  });


route.get('/clear', (req: Request, res: Response) => {
    res.send('Hello World /clear !');
  });

export default route;