const cors = require('cors');
const express=require('express');
const connectToDB = require('./Config/DB');
const dotenv = require('dotenv');


// const dataController = require('./Controllers/dataController');
const router = require('./Routes/index_routes');


const app = express();


dotenv.config({silent:true});// silent:true  it does not throw error 

const PORT = process.env.PORT || 5000;
const allowed = process.env.ALLOWED ;


app.use(cors({
  origin: allowed
}));

app.use(express.json());
connectToDB();

app.use("/api", router);
    

app.listen(PORT,  () => {
  console.log(`Server is running on port ${PORT}`);
});
