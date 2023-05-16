const mogoose=require("mongoose");

async function connect(){
        try{
            const link="mongodb+srv://Mance:aleksa06@coolimanija.3adb5av.mongodb.net/Probars?retryWrites=true&w=majority";
            const connection=await mogoose.connect(link);
            console.log("baza uspesna");
        }
        catch(err){
            console.log("Baza nije povezana \n"+err.message);
        }
}
module.exports=connect;