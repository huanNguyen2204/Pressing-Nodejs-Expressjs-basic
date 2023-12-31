import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cookieSession from "cookie-session";

import { router } from "./app/index.js";
import initWebsocket from "./app/websocket.js";

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.use(express.urlencoded({ extended: false }));

app.set("views", `${dirname(fileURLToPath(import.meta.url))}/app/views`);
app.set("view engine", "pug");

app.get("/", (_request, response) => {
  response.render("login");
});

app.use(router);

app.listen(8080, () => {
  console.log("Server is running on port 8080")
});

initWebsocket();