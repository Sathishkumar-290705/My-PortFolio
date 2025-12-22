const dataService = require("../Services/dataServices")



  const uploads = async (req,res) =>{
    try {
      const jsonData = req.body;   // JSON file parsed as body
     
      // console.log(typeof jsonData, jsonData);
      
      if (!Array.isArray(jsonData)) {
        return res.status(400).json({ message: "JSON must be an array." });
      }

      const result = await dataService.uploadJson(jsonData);
      res.status(201).json({ message: "Data inserted successfully.", result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    } 


  const  getAll= async (req , res) => {
    try {
      
      const data = await dataService.getAll();
      res.status(200).json(data);
    } catch (error) {
   
      res.status(500).json({ error: error.message });
    }
  }


module.exports = {uploads , getAll};