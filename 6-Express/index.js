import express from "express";
import { router as MovieRouter } from "./movie/routers.js";

const app = express();

app.use("/movie", MovieRouter);

app.get("/", (_request, response) => response.redirect("/movie"));

app.listen(8080, () => {
  console.log("Let's see express into nodejs")
})