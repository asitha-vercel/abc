const express = require('express');
const app = express();

app.get('/status', (req, res) => {
    res.send('I-AM-ALIVE');
});

// Vercel එකට සහ GitHub එකට සර්වර් එක දුවන්න PORT එකක් දීම
const WATCHDOG_PORT = process.env.PORT || 8000;
app.listen(WATCHDOG_PORT, () => {
    console.log(`Watchdog Status Endpoint Live on Port ${WATCHDOG_PORT}`);
});
