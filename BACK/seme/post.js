const mongoose=require("mongoose");


const PostSchema=new mongoose.Schema({
    imeJela:{
        type:String,
        trim:true,
        required:true,
    },
    slika:{
        type:String,
        trim:true,
        required:true,
    },
    recept:{
        type:String,
        trim:true,
        required:true,
    },
    kratakopis:{
        type:String,
        trim:true,
        required:true
    },

    tagovi:{type:String,trim:true,required:true},

    idKorisnika:{
        type:String,
        trim:true,
        required:true,
    },
});

module.exports=mongoose.model("post", PostSchema);