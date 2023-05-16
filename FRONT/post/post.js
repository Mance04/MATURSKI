async function dodajRecept(){
    try{
        let formadata=new FormData();
        let file=document.getElementById("file").files;

        var tag;
        if(document.getElementById("Dorucak").checked===true){
            tag="dorucak";
        }
        else if(document.getElementById("Rucak").checked===true){
            tag="rucak";
        }
        else if(document.getElementById("Vecera").checked===true){
            tag="vecera";
        }
        else if(document.getElementById("Slatkaj").checked===true){
            tag="desert";
        }
        console.log(file[0]);
        formadata.append("slika",file[0]);
        formadata.append("tagovi",tag);
        formadata.append("imeJela",document.getElementById("nazivJela").value);
        formadata.append("recept",document.getElementById("text-input").innerHTML);
        formadata.append("idKorisnika",localStorage.getItem("id"));
        formadata.append("kratakopis",document.getElementById("kratakopis").innerHTML);
        
        var res=await axios.post(LINK + "/api/post",formadata,{
            headers:{
                "Content-Type": "multipart/form-data"
            }
        });
            console.log(res);

    }
    catch(err){
        console.log(err);
    }
}