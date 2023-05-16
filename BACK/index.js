const ex=require("express");
const cors=require("cors");
const multer=require("multer");
const path=require("path");

const baza=require("./baza/baza");

const user=require("./funkcije/userF");
const post=require("./funkcije/postF");

const upload = multer({ 
    dest: '../FRONT/pictures',
    fileFilter:function(req,file,calback){
        let ext = path.extname(file.originalname).toLowerCase();
        if(ext!==".jpg" && ext!==".png" && ext!==".jpeg")
        {
            return calback(new Error('Podrzani formati slkike su jpg png i jpeg'))
        }
        calback(null, true);
    }
})

const app=ex();
const PORT=8080;

app.use(cors());
app.use(ex.json());

app.use(ex.static("../FRONT"))

app.listen(PORT,function(){
console.log("server slusa na portu:"+PORT+"\n");
})

baza();

app.get("/api/user", user.get);
app.post("/api/user", user.post);
app.post("/api/login",user.login);

app.post("/api/post",upload.single("slika"), post.post);
app.delete("/api/post/:id",post.delete);
app.get("/api/post/dorucak",post.getdorucak);
app.get("/api/post/rucak",post.getrucak);
app.get("/api/post/vecera",post.getvecera);
app.get("/api/post/desert",post.getdesert);
app.get("/api/post/:id",post.getone);
