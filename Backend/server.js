const cors = require('cors');
const express=require('express');
const connectToDB = require('./Config/DB');
const dotenv = require('dotenv');


// const dataController = require('./Controllers/dataController');
const router = require('./Routes/index_routes');


const app = express();


dotenv.config({silent:true});

const PORT = process.env.PORT || 5000;


// const allowed = ['http://localhost:3000'];


app.use(cors());


app.use(express.json());
connectToDB();

app.use("/api", router);
    

app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`);
    
})