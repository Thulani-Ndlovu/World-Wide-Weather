import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import ejs from "ejs";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.render("index.ejs");
});


app.listen(port, () => {
    console.log(`Listening from port ${port}`);
});