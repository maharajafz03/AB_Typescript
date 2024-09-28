import express, { Request, Response } from 'express';
import { WebSocketServer } from 'ws';
import http from 'http';

// Initialize Express app
const app = express();

// Define a simple route for testing HTTP server
app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express HTTP server!');
});

// Create an HTTP server using Express
const server = http.createServer(app);

// Create a WebSocket server on top of the HTTP server
const wss = new WebSocketServer( server );

// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('New WebSocket client connected');

    // Send a welcome message to the connected client
    ws.send('Welcome to the WebSocket server!');

    // Handle messages from clients
    ws.on('message', (message) => {
        console.log('Received:', message.toString());

        // Broadcast the received message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === ws.OPEN) {
                client.send(`Broadcast: ${message}`);
            }
        });
    });

    // Handle WebSocket close event
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the HTTP server and WebSocket on port 8080
servers.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
