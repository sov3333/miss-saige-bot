require('dotenv').config();
const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

async function generateResponse(prompt, modelId) {
  // Use the OpenAI API to generate a response to the prompt using the fine-tuned model
  const response = await openai.completions.create(
    {
      model: modelId,
      prompt: prompt,
      max_tokens: 1024,
      temperature: 0.5,
    },
    {
      api_key: openai.apiKey,
    }
  );

  // Return the generated response
  return response.choices[0].text;
}

bot.on('message', async (ctx) => {
  // Generate a response using the fine-tuned model
  const response = await generateResponse(ctx.message.text, fineTunedModelId);
  ctx.reply(response);
});

bot.startPolling();
