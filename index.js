import OpenAI from 'openai/index.mjs';
const fs = require('fs');
require ('dotenv').config();

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const readArticleFromFile = async (path) => {
    return fs.promises.readFile(path, 'utf8');
}

const saveToFile = async (htmlContent, path) => {
    return fs.promises.writeFile(path, htmlContent, 'utf8')
}
