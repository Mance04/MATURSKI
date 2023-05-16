const LINK = "http://localhost:8080";

async function registrujSE()
{ 
    try
    { 

            let ImeIPrezime = document.getElementById("user").value;
            let email = document.getElementById("mail").value;
            let pass = document.getElementById("password").value;
        
        
        
            if(ImeIPrezime==="")
            {
                document.getElementById("invalid-feedback1").innerHTML="Niste uneli username!!!"
            }
            else if(email==="")
            {
                document.getElementById("invalid-feedback2").innerHTML="Niste uneli Email!!!"
            }
            else if(pass === "")
            {
                document.getElementById("invalid-feedback3").innerHTML="Niste uneli sifru!!!"
            }
            else if(!email.includes('@'))
            {
                document.getElementById("invalid-feedback2").innerHTML="Email nije validan!!!";
            }
            else if(pass.length<8)
            {
                document.getElementById("invalid-feedback3").innerHTML="Sifra ima manje od 8 karaktera!!!";
                
            }
            else
            {
                let t = false;
let u = false;
let v = false;

for (let i = 0; i < pass.length; i++) {
  let element = pass.charCodeAt(i);

  if (element >= 97 && element <= 122) {
    t = true;
  } else if (element >= 65 && element <= 90) {
    u = true;
  } else if (element >= 48 && element <= 57) {
    v = true;
  }
}

if (!t || !u || !v) {
  document.getElementById("invalid-feedback3").innerHTML = "Šifra nije dovoljno sigurna";
}
                else
                {
                    let res = (await axios.post(LINK+"/api/user",{
                        username:ImeIPrezime,
                        sifra:pass,
                        email:email
                    })).data;
                    console.log(res);
                    if(res.uspesnost)
                    {
                        localStorage.setItem("id",res.saved_user._id)
                        location.href="../index.html";
                    }
                    else
                    {
                        document.getElementById("invalid-feedback3").innerHTML=res.message;
                    }
                }
            }
        }
        
    catch(err)
    {
        console.log(err);
    }
    
}