const { default: mongoose } = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name:{type : String,required:true,unique:true},
    age : Number,
    email : {type:String,required:true,unique:true}
})
module.exports= mongoose.model('Profiles',ProfileSchema)