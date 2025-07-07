const WebSocket = require("ws");
const http = require("http");
const server = http.createServer();
const wss = new WebSocket.Server({ server });

let messages = [];

wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ type: "history", data: messages }));

  ws.on("message", (msg) => {
    const messageData = JSON.parse(msg);
    messages.push(messageData);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: "new", data: messageData }));
      }
    });
  });
});

server.listen(8080, () => {
  console.log("WebSocket server running on ws://localhost:8080");
});
