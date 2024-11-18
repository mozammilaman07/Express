const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app listening in port ${port}`);
});

app.use((req,res) => {
    console.log("new incoming request");
    res.send("this is a web page")
});