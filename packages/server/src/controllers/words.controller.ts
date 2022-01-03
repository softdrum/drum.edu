import { wordsService } from "../services/words.service";

class WordsController {
  async getWords(req, res) {
    try {
      const data = await wordsService.getWords(req.query.lang);
      res.json(data);
    } catch (error) {
      res.status("400").send({
        message: error.message,
      });
    }
  }

  async validateDictant(req, res) {
    try {
      const { sourceLang, translateLang, data } = req.body;
      const result = await wordsService.validate({
        sourceLang,
        translateLang,
        data,
      });
      res.json(result);
    } catch (error) {
      res.status("400").send({
        message: error.message,
      });
    }
  }
}

export const wordsController = new WordsController();
