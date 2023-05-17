
async function login(){
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;

        document.getElementById("invalid-feedback1").innerHTML = "";
        document.getElementById("invalid-feedback2").innerHTML = "";

        
        let t = false;
        let u = false;
        let v = false;

        if(email==="")
            {
                document.getElementById("invalid-feedback1").innerHTML="Niste uneli Email!!!"
            }
            else if(pass === "")
            {
                document.getElementById("invalid-feedback2").innerHTML="Niste uneli sifru!!!"
            }
            else if(!email.includes('@'))
            {
                document.getElementById("invalid-feedback1").innerHTML="Email nije validan!!!";
            }
                else
                {
                    let res = (await axios.post(LINK+"/api/login",{
                        email:email,
                        sifra:pass   
                    })).data;
                    console.log(res);
                    if(res.uspesnost)
                    {
                        
                        localStorage.setItem("id",res.id)
                        window.alert("Uspesna prijava");
                        location.href="../index.html";
                    }
                    else
                    {
                        document.getElementById("invalid-feedback2").innerHTML=res.message;
                    }
                }
    }