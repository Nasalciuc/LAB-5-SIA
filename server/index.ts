import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  company: string;
  message: string;
  createdAt: string;
}

const messages: ContactMessage[] = [];
let nextId = 1;

// POST /api/contact - Submit a contact form message
app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Numele, emailul și mesajul sunt obligatorii.' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: 'Adresa de email nu este validă.' });
    return;
  }

  const newMessage: ContactMessage = {
    id: nextId++,
    name,
    email,
    company: company || '',
    message,
    createdAt: new Date().toISOString(),
  };

  messages.push(newMessage);
  console.log(`[Contact] New message from ${name} (${email})`);

  res.status(201).json({
    success: true,
    message: 'Mesajul a fost trimis cu succes! Vom reveni cu un răspuns în maxim 24 de ore.',
    data: newMessage,
  });
});

// GET /api/contact - List all messages (admin)
app.get('/api/contact', (_req, res) => {
  res.json({ messages });
});

// GET /api/health - Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Pegasus API server running on http://localhost:${PORT}`);
});
