import OpenAI from 'openai/index.mjs';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const readArticleFromFile = async (path) => {
    return fs.promises.readFile(path, 'utf8');
};

const saveToFile = async (htmlContent, path) => {
    return fs.promises.writeFile(path, htmlContent, 'utf8')
};

const fetchData = async(article) => {
    try {
        const response = await openAI.chat.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            messages: [
                {
                    role: 'system', content: 'Jesteś asystentem przetwarzającym artykuły na kod HTML.'
                },
                {
                    role: 'user', content: `Przetwórz poniższy artykuł na kod HTML zgodny z wytycznymi:\n\n${article}\n\nDodaj znaczniki <img> z odpowiednimi miejscami dla grafik oraz podpisy do obrazków pod każdym obrazem.\n\nKod HTML:`
                },
            ],
            max_tokens: 2000,
            temperature: 0.5,
        });

        const htmlContent = response.choices[0].message.content.trim();
        return htmlContent;

    } catch (error) {
        console.error("Error connecting to OpenAI: ", error);
    }
};

const main = async () => {
    try {
        const articlePath = './article.txt';
        const outputPath = './artykul.html';

        const article = await readArticleFromFile(articlePath);

        const generatedHtml = await fetchData(article);

        await saveToFile(generatedHtml, outputPath);
    }catch (error) {
        console.error("Error: ", error);
    }
};

main();