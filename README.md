# Miss Saige Bot

A Telegram bot that uses OpenAI fine-tuning to answer questions about a project.

## Setup

1. Install the required libraries:
```
npm install openai telegraf dotenv
```

2. Replace `API_KEY` in `.env` with your actual OpenAI API key. You can find your API key on the API dashboard at https://beta.openai.com/.

3. Replace `BOT_TOKEN` in `.env` with the API token for your Telegram bot. You can create a bot and get its API token by following the instructions in the Telegram Bot API documentation.

4. Replace `questions` and `answers` in `dataset.js` with the actual questions and answers for your dataset.

5. Call the `fineTuneModel` function to fine-tune the language model on your dataset. Make sure to store the returned model ID so that you can use it to generate responses later.

6. Run the program with `node` to start the Telegraf bot to listen for user messages and generate responses using the fine-tuned model.