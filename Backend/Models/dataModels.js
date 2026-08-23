const databaseconnection = require("../Config/DB")



module.exports = {
    async insertMany(data){
        const db = await databaseconnection();
      
        const collectionName = db.collection("User_data");
        
        return collectionName.insertMany(data)

    },
    async getAll(){
        const db = await databaseconnection();
        const collectionName = db.collection("User_data");
        return collectionName.find().toArray();

    }

}
