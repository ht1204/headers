const express = require('express');
const path = require("path");
const app = express();

const viewsDirPath = path.join(__dirname, "views");
app.set("view engine", "ejs");
app.set("views", viewsDirPath);

const PORT = 3000;

app.get('/', (req, res) => {
    const { headers } = req;
    res.render("index", {
        headers,
    })
});

app.listen(PORT, () => console.log('Listening on port 3000!'));
