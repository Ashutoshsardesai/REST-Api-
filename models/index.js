const mongoose=require("mongoose")
mongoose.set("debug",true)
mongoose.connect("mongodb://localhost/itrack");


mongoose.Promise=Promise;
module.exports.PO=require("./PO");