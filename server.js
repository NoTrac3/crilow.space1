// Get visitor IP and send to Discord Webhook
document.addEventListener("DOMContentLoaded", function() {
  fetch('https://api.ipify.org?format=json')    .then(response => {
      if (!response.ok) throw new Error('Failed to get IP');      return response.json();    })    .then(data => {
      const ip = data.ip;
      const webhookURL = 'https://discord.com/api/webhooks/1373867976188756008/YsV-h95KrYtgAjJi2bZst4qzbcaTTZ57JZYESO3uPFVd-sivSXBJSYSJX1xyFhMzqtMg';

      const payload = {
        content:`🌐 New visitor\n**IP**: ||${ip}||\n**Page**:${window.
