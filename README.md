# Miss Saige Bot

## Setup

Install npm packages:
```
npm install openai telegraf
```

Replace `YOUR_API_KEY` in the code with your actual OpenAI API key. You can find your API key on the API dashboard at https://beta.openai.com/.

Replace `BOT_TOKEN` in the code with the API token for your Telegram bot. You can create a bot and get its API token by following the instructions in the Telegram Bot API documentation.

Replace `questions` and `answers` in the `fineTuneModel` function with the actual questions and answers in your dataset.

Call the `fineTuneModel` function to fine-tune the language model on your dataset. Make sure to store the returned model ID so that you can use it to generate responses later.

Run the program with `node` to start the bot.