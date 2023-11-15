import { WebSocketServer } from "ws";

export default function init(app) {
  const wss = new WebSocketServer({ port: 8081 });

  const connections = [];

  wss.on("connection", (ws) => {
    connections.push(ws);

    connections.on("message", (message) => {
      connections.forEach((connection) => {
        connection.send && connection.send(message);
      });
    });
  });
}