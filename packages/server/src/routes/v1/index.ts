import { Router } from "express";
import wordsRoutes from "./words.routes";

const router = Router();

router.use("/words", wordsRoutes);

export default router;
