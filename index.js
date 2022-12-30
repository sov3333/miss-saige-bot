require('dotenv').config();
const openai = require('./openai');
const telegram = require('./telegram');
const dataset = require('./dataset');

const questions = dataset.questions;
const answers = dataset.answers;

async function main() {

  // Set up the OpenAI API client
  openai.apiKey = process.env.OPENAI_API_KEY;

  // Fine-tune the language model on the questions and answers
  const modelId = await openai.fineTuneModel(questions, answers);

  // Start the Telegram bot
  telegram.startBot(modelId);
}

main();
