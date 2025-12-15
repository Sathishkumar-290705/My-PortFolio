const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config({silent:true});

const MONGO_URI = process.env.MONGO_URI
const DB_NAME = process.env.DB_NAME


let db;

const connectToDB = async ()=>{
    const client = new MongoClient(MONGO_URI);


    try{
        await client.connect();
        console.log('Successfully connected to Mongo db');

        const db = client.db(DB_NAME);
        console.log(`Using database: ${DB_NAME}`);

        const collections = await db.listCollections().toArray();
        console.log('Existing collections:', collections.map(col => col.name));

        if (collections.length === 0){
            console.log('No collections found in the database.');
            await db.createCollection('testCollection');
        }

        return db;

        
    }catch(error ){
        console.error ('Error connecting to mongo db : ', error);
        process.exit(1);
    }

};

module.exports = connectToDB;