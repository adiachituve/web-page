/* eslint-disable no-console */
const WebSocketServer = require('ws');

const wss = new WebSocketServer.Server({ port: 1234 });
let isPaused = false; // Flag to indicate whether the connection is paused

// Handle new connections to the WebSocket server
wss.on('connection', (ws) => {
  console.log('new client connected');

  wss.on('open', () => {
    console.log('WebSocket connection is open.');
    wss.send('open');
  });

  wss.on('close', () => {
    console.log('WebSocket connection is closed.');
    wss.send('close');
  });

  wss.on('pause', () => {
    console.log('Pause!');
    ws.send('disconnected');
    isPaused = true;
  });

  wss.on('resume', () => {
    console.log('Resume!');
    ws.send('connected');
    isPaused = false;
  });

  // Pause/resume the connection every 2 seconds
  setInterval(() => {
    if (isPaused) {
      wss.emit('resume');
    } else {
      wss.emit('pause');
    }
  }, 2000);
});
