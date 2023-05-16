const LINK = "http://localhost:8080";

async function registrujSE()
{ 
    try
    { 
            let User={
                username:(String)(document.getElementById("user").value),
                email:(String)(document.getElementById("mail").value),
                sifra:(String)(document.getElementById("password").value)
            }
            var res=await axios.post(LINK + "/api/user",User);
            console.log(res)
            let id=res.data.saved_user._id;
            console.log(id);
            localStorage.setItem("id",id);
            location.href="../index.html";
    }
    catch(err)
    {
        console.log(err);
    }

}