import OpenAI from 'openai/index.mjs';
const fs = require('fs');
require ('dotenv').config();

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function readArticleFromFile(path) {
    return fs.promises.readFile(path, 'utf8');
}

async function saveToFile (htmlContent, path) {
    return fs.promises.writeFile(path, htmlContent, 'utf8')
}