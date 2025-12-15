const dataModel = require("../Models/dataModels")

module.exports = {

    async uploadJson(jsonArray){
        return dataModel.insertMany(jsonArray)
    },
    async getAll(){
        return dataModel.getAll();
    }
};

