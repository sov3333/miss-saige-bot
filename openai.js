require('dotenv').config();
const openai = require('openai');

// Set up the OpenAI API client
openai.apiKey = process.env.OPENAI_API_KEY;

const fineTuneModel = async (questions, answers) => {
  // Use the OpenAI API to fine-tune the language model
  const response = await openai.models.create(
    'gpt-3',
    {
      prompt: questions,
      temperature: 0.5,
      max_tokens: 1024,
      n: 1,
      stop: '\n',
      presence_penalty: 0.5,
      best_of: 1,
      frequency_penalty: 0,
      presence_based: false
    },
    {
      engine: 'text-davinci-002',
      temperature: 0.5
    }
  );

  // Return the fine-tuned model
  return response.id;
}

module.exports = {
  fineTuneModel,
  // Add other functions you want to export here
};