const path = require('path');
const express = require('express');

const port = 3000;
const app = express();

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendfile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
