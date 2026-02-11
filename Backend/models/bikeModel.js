const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  bikeName:{
        type:String,
        required:[true, "Please enter bike name "]

    },
       bikePrice:{
        type:Number,
        required:[true, "Please enter bike price "]

    },
       bikeDescription:{
        type:String,
        require:[true, "Please enter bike description "]

    },
      bikePhoto:{
        type:String,
        require:[true, "Please enter bike photo "]

    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true , "User if is missing"]
    }

},{
    timestamps:true  
    
});

const Bike = mongoose.model("bike",bikeSchema);

module.exports =Bike;