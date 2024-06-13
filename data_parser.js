const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/data', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    
    // Обробка даних
    const response = {
        message: 'Data received successfully',
        receivedData: data
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
