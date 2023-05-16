const post=require("../seme/post");



async function getdorucak(req,res){
    try{
        const all_posts = await post.find({tagovi:"dorucak"});
        res.json({
            uspesno:true,
            posts:all_posts
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
}
async function getrucak(req,res){
    try{
        const all_posts = await post.find({tagovi:"rucak"});
        res.json({
            uspesno:true,
            posts:all_posts
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
}
async function getvecera(req,res){
    try{
        const all_posts = await post.find({tagovi:"vecera"});
        res.json({
            uspesno:true,
            posts:all_posts
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
}
async function getdesert(req,res){
    try{
        const all_posts = await post.find({tagovi:"desert"});
        res.json({
            uspesno:true,
            posts:all_posts
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
}

async function post1(req,res){
    try{

        const newPost=new post({
            imeJela:req.body.imeJela,
            recept:req.body.recept,
            slika:req.file.filename,
            tagovi:req.body.tagovi,
            kratakopis:req.body.kratakopis,

            idKorisnika:req.body.idKorisnika,
        });

        const savedPost=await newPost.save();

        res.send({
            uspesnost:true,
            objava:savedPost,
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
}

async function get2(req,res){
    try{
        const postId = req.params.id;
        const Post = await post.findById(postId);
        res.json({
            post:Post
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
};


async function del(req,res){
    try{
        const postId = req.params.id;
        const newPost = await post.deleteOne({_id:postId})
        
        res.send({
            uspesnost:true,
            objava:newPost,
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
};


module.exports=new Object({
    getdorucak:getdorucak,
    getrucak:getrucak,
    getvecera:getvecera,
    getdesert:getdesert,
    getone:get2,
    post:post1,
    delete:del
})