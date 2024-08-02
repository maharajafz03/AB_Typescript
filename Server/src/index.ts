import express from 'express'
import route from './route';

const app = express();

const port = 20000;


app.use(route)

// ...............


app.listen(port, () => {
    console.log("app is running on port")
});