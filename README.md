# Miss Saige Bot

## How

To create a program in JavaScript that runs a Telegram bot using OpenAI fine-tuning to answer questions about a project, you will need to do the following:

1. Install the required libraries:
```
npm install telegraf openai dotenv
```

2. Set up your .env file with your OpenAI API key and your Telegram bot token.

3. Create a questions and answers array with the data you want to use to fine-tune the language model.

4. Use the OpenAI API to fine-tune the language model on the questions and answers data.

5. Use the fine-tuned model to generate responses to user messages.

6. Set up a Telegraf bot to listen for user messages and generate responses using the fine-tuned model.

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