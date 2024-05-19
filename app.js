const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

// app.options('*', cors()) 
app.get('/', (req, res) => {
    res.status(200).json({ status: 'hello from node' });
});

app.get('/healthcheck', (req, res) => {
    res.status(200).json({ status: 'ok' });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
