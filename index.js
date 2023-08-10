import generate from './api/generate.js'

async function sumbitOpenAIPrompt(prompt, temperature, model) {
  try {
    return await generate({prompt, temperature, model})
  } catch (error) {
    console.log(error)
    return null;
  }
}

const testPrompt = 'Return only 123'; //This string only uses a small amount of tokens (OpenAI API Credits)

const result = await sumbitOpenAIPrompt(testPrompt);

if (result !== null) {
  console.log(result.data.choices[0].text);
}