const user=require("../seme/user");

async function get(req,res){
    try{
        let all_users=await user.find();
        res.json({
            uspesnost:true,
            all_users:all_users
        })
    }
    catch(err){
        res.json({
            uspesnost:false,
            message:err.message
        })
        
    }
}

async function post(req,res){
    try{
        let new_user=new user({
            username:req.body.username,
            email:req.body.email,
            sifra:req.body.sifra
        })
        

        let saved_user=await new_user.save();
        res.json({
            uspesnost:true,
            saved_user:saved_user
        })
    }
    catch(err){
        res.json({
            uspesnost:false,
            message:err.message
        })
        
    }
}
async function login(req,res){
    try{
        let email=req.body.email;
        let password=req.body.sifra;
        let users=await user.find();
        let t=false;
        let p=0;
        for(let i=0;i<users.length;i++)
        {
            if(users[i].email===email && users[i].sifra===password)
            {
                p=i;
                t=true;
            }  
        }
            
            if(!t)
            {
            res.json({
                uspesnost:false,
                message:"Neispravni podaci"
            })
            }
            else{
                res.json({
                    uspesnost:true,
                    id:users[p]._id,
                })
            }
        
    }
    catch(err){
        res.json({
            uspesnost:false,
            message:err.message
        })
    }
}

module.exports=new Object({
    get:get,
    post:post,
    login:login
})