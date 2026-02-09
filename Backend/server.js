const app = require("./app");
const dotenv = require("dotenv");
const databaseConnection=require("./config/databaseConnection");



dotenv.config({path: "./config/config.env"});
databaseConnection();


app.listen(4000 , ()=>{
    console.log("server is runnig on 4000");
    
})

