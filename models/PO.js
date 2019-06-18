const mongoose=require("mongoose");

const POSchema=new mongoose.Schema({
    PO_number:
    {
        type: Number,
        required:true
        
    },
    POScope:
    {
        type:String,
        required:true
    },
    Amount_Released:
    {
        type:Number,
        required:true
    },
    
    Amount_Consumed:
    {
        type:Number,
        default:0
    },
    Amount_Left:
    {
        type:Number,
    }
})

const   PO=mongoose.model('PO',POSchema)
module.exports=PO