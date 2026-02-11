const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");


app.use(cors({origin:true , credentials:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const userRoutes = require("./routes/userRoutes");
const bikeRoutes = require ("./routes/bikeRoutes")

app.use('/api/v1/user',userRoutes);

app.use('/api/v1/bike',bikeRoutes)


module.exports = app;