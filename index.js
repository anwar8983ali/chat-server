import { WebSocketServer } from 'ws';
import http from 'http';

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("WebSocket server is live ✅");
});

const wss = new WebSocketServer({ server });

let messages = [];

wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ type: "history", data: messages }));

  ws.on("message", (msg) => {
    const messageData = JSON.parse(msg);
    messages.push(messageData);

    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(JSON.stringify({ type: "new", data: messageData }));
      }
    });
  });
});

// ✅ Bind to 0.0.0.0 and respond to HTTP requests
server.listen(8080, '0.0.0.0', () => {
  console.log("WebSocket server running on ws://0.0.0.0:8080");
});





