import { wordsModel } from "../models/words.model";

class WordsService {
  async getWords(lang) {
    if (!lang) {
      throw new Error("No lang provided");
    }
    try {
      const words = await wordsModel.find();
      return words.map((pair) => pair[lang]);
    } catch (error) {
      throw new Error("Can not get words from database");
    }
  }

  async validate({ sourceLang, translateLang, data }) {
    const validateOne = async (item) => {
      const pair = await wordsModel.findOne({ [sourceLang]: item.sourceWord });
      return {
        ...item,
        isCorrect: item.answer === pair[translateLang],
      };
    };
    const promises = data.map((item) => validateOne(item));
    const result = await Promise.all(promises);
    return result;
  }
}

export const wordsService = new WordsService();
