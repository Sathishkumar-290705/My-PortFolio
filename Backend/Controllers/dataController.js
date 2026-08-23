const dataService = require("../Services/dataServices");
const data = require("../Docs/PortFolio.json");
const {MongoClient } = require("mongodb");
const { json } = require("express");
const MONGO_URI = process.env.MONGO_URI;


  const uploads = async (req,res) =>{
    try {
      const jsonData = data;  
      if (!Array.isArray(jsonData)) {
        return res.status(400).json({ message: "JSON must be an array." });
      }
    
     
      const result = await dataService.uploadJson(jsonData);
      console.log(jsonData.length);
      res.status(201).json({ message: "Data inserted successfully.", result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    } 


  const  getAll= async (req , res) => {
    try {
      
      const data = await dataService.getAll();
      if(!data){
        return res.status(404).json({message : "data not found "});
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


module.exports = {uploads , getAll};