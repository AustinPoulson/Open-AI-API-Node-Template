import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from '../secrets.js';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function generate({prompt = '', temperature = 0.6, model = "text-davinci-003"}) {

  if (!OPENAI_API_KEY) {
    console.log("OpenAI API key not configured, please follow instructions in README.md");
    return;
  }

  if (prompt.trim().length === 0) {
    console.log("Please enter a valid prompt");
    return;
  }

  try {
    return await openai.createCompletion({
      model: model,
      prompt: prompt,
      temperature: temperature,
    })
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      throw error.response;
    } else {
      throw error.message;
    }
  }
}