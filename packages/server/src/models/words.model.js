import { wordPairs } from './../fixtures/wordPairs.js';

export const wordsModel = {
    async find() {
        return wordPairs;
    },
    async findOne({ ru= '', en= '' }) {
        return wordPairs.find(pair => {
            if (ru) {
                return pair['ru'] === ru;
            } else if (en) {
                return pair['en'] === en;
            }
        })
    }
}