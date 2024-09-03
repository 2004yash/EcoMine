const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/health', (req, res) => {
  res.json({ok: true});
});

const genAI = new GoogleGenerativeAI("AIzaSyDepGvIR8rxffXaorvQeVh4Pa7YXbbQtHA");

const predefinedInstructions = "You are a helpful assistant for Ecomine, a website that helps companies measure and reduce their carbon footprint. Provide clear, concise, and polite responses limited to one or two sentences about Ecomine's features, benefits, and usage. If a question is not directly related to Ecomine, respond with 'Sorry, can't answer.If a customer is not sattisfied by your answer You tell them to contact support and give them this no. to call 8081489340 and just this no. If someone abuse you you abuse them back";

app.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    const combinedPrompt = `${predefinedInstructions}\n\n${prompt}`;
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(combinedPrompt);
    const response = await result.response;
    const text = await response.text();
    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating content');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
