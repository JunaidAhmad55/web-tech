let mongosse=require("mongoose");
var usersSchema=mongosse.Schema({
    clientname:String,
    clientorder:String,
    
})


module.exports=mongosse.model("web tech client",usersSchema);