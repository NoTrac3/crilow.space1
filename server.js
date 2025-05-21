const express = require('express');
const { WebhookClient } = require('discord.js');

const app = express();
const PORT = 3000;

// Replace this with your actual webhook URL — only with proper authorization.
const webhookClient = new WebhookClient({
  url: 'https://discord.com/api/webhooks/your_webhook_id/your_webhook_token',
});

app.use(express.json());

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  // Only log IPs if explicitly authorized for red team or testing purpose
  webhookClient.send({
    content: `🔍 Request received from IP: ${ip}`,
  }).catch(console.error);

  res.send('Hello! Your request was received.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
