// server.js — tiny Node.js server that logs user responses to responses.txt
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;
const RESPONSES_FILE = path.join(__dirname, 'responses.txt');

app.use(cors());
app.use(express.json());

// POST /response — called by the browser when the user taps 🤝 or 👎
app.post('/response', (req, res) => {
  const { result } = req.body;

  if (!result) {
    return res.status(400).json({ error: 'Missing result field' });
  }

  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${result}\n`;

  // Append to responses.txt (creates the file if it doesn't exist)
  fs.appendFileSync(RESPONSES_FILE, line, 'utf8');

  console.log(`✅ Response logged: ${result} at ${timestamp}`);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`📝 Response logger running at http://localhost:${PORT}`);
  console.log(`   Responses will be saved to: responses.txt`);
});
