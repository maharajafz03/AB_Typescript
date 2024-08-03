import express, { Request, Response, Router } from 'express';
import path from 'path';

const route = Router();

// Define the route for the root path
route.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// Define the route for the /home path
route.get('/home', (req: Request, res: Response) => {
    // Correctly define the path to the public directory
    const filepath = path.join(__dirname, 'public', 'index.html'); // Specify the file you want to serve
    res.sendFile(filepath);
});

// Define the route for the /down path
route.get('/down', (req: Request, res: Response) => {
    res.send('Hello World /down!');
});

// Define the route for the /clear path
route.get('/clear', (req: Request, res: Response) => {
    res.send('Hello World /clear!');
});

export default route;
