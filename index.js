// index.js
import express from "express";
import { ExpressPeerServer } from "peer";
import cors from "cors";
import http from "http";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ PeerJS server is running");
});

const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/peerjs",
  allow_discovery: true,
});

app.use("/", peerServer);

const PORT = 3003

server.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ PeerJS server running on port ${PORT}`);
});

