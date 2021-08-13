const express = require('express');

const app = express();

app.get('*', handler);


async function handler(req, res) {
  setTimeout(() => res.status(503).send('Hello'), 3000);
}

app.listen(5000, () => {
    console.log('server listening on port 5000');
});