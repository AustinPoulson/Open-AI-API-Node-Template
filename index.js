import fetch from "node-fetch";
import generate from './api/generate.js'

async function sumbitOpenAIPrompt(prompt, temperature, model) {
  try {
    const response = await generate({prompt, temperature, model});

    const data = await response.json();
    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }

    return data.result;

  } catch(error) {
    // Consider implementing your own error handling logic here
    console.log(error);
    return null;
  }
}

const testPrompt = 'Return only 123'; //This string only uses a small amount of tokens (OpenAI API Credits)

const result = sumbitOpenAIPrompt(testPrompt);

console.log(result);