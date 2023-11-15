import { Router } from "express";
import { listAction } from "./controllers/index.js";

const router = Router();

router.get("/", listAction);

export { router };