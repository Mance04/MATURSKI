


const LINK = "http://localhost:8080";

async function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

        let res=await axios.post(LINK+"/api/login",{
            email:email,
            password:password
        });
        console.log(res);
        
        if(res.data.uspesnost===true){
            
            location.href="../index.html"
            console.log("1");
            localStorage.setItem("id",res.data.id);
        }
}