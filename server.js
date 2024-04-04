import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import ejs from "ejs";
import 'dotenv/config'


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_key}`;

    let err = null;
    let weather;

    try {
        const weather_data = await axios.get(URL);
        weather = weather_data.data;
        console.log(weather);

        
    } catch (err) {
        err = "Invalid City!!!";
        weather = null;
    }

    res.render("index.ejs", {weather, err });
});


app.listen(port, () => {
    console.log(`Listening from port ${port}`);
});