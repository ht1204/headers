const express = require('express');
const app = express();


const PORT = 3000;

app.get('/', (req, res) => {
    const { headers } = req;
    res.status(202).send(headers);
});

app.listen(PORT, () => console.log('Listening on port 3000!'));
