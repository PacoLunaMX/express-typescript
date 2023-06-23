"use strict";
const express = require("express");
const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json
const PORT = 3000;
app.get("/", (_, res) => {
    console.log('someone pinged here!!');
    res.sen('pong');
});
app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
