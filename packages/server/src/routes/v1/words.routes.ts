import { Router } from "express";
import { wordsController } from "../../controllers/words.controller";

const router = Router();

router
  .route("/")
  .get(wordsController.getWords)
  .post(wordsController.validateDictant);

export default router;
