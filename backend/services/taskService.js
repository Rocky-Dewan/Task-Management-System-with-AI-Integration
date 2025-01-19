const express = require('express');
const app = express();

app.use(express.json());

app.post('/ai/predict', (req, res) => {
    const { description } = req.body;

    // Simulated AI priority (1: High, 2: Medium, 3: Low)
    const priority = description.includes('urgent') ? 1 : 3;
    res.json({ priority });
});

app.listen(5000, () => {
    console.log('Mock AI server running on http://localhost:5000');
});
