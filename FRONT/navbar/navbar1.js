
let body=document.body.innerHTML;
let nav=`
<div class="container-fluid sticky-top">
        <nav class="navbar navbar-default navbar-static-top navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="../index.html">
                    <img style="width: 150px;" src="../pictures/Snimak ekrana 2023-04-06 21173211.png" alt="">
                </a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 lista">
                        <li class="nav-item m1">
                            <a class="nav-link p1" href="../index.html#dorucak">DORUČAK</a>
                        </li>
                        <li class="nav-item m1">
                            <a class="nav-link p1" href="../index.html#rucak">RUČAK</a>
                        </li>
                        <li class="nav-item m1">
                            <a class="nav-link p1" href="../index.html#vecera">VEČERA</a>
                        </li>
                        <li class="nav-item m1">
                            <a class="nav-link p1" href="../index.html#desert">DESERT</a>
                        </li>
                        <li class="nav-item m1">
                            <a class="nav-link p1" href="../kalkulator k/calc.html">KALKULATOR KALORIJA</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li style="" id="dodaj" class="nav-item m3">
                            <a  class="nav-link " aria-current="page" href="../post/post.html">DODAJ</a>
                        </li>
                        <li id="login" class="nav-item m3">
                            <a  class="nav-link " aria-current="page" href="../login/login.html">LOGIN</a>
                        </li>
                        <li id="register" class="nav-item m3">
                            <a  class="nav-link" href="../register/register.html">REGISTER</a>
                        </li> 
                        <li id="logout" class="nav-item m3">
                            <button class="nav-link" onclick="logout()">LOGOUT</button>
                        </li>     
                    </ul>
                </div>   
        </nav>
    </div>
${body}`
try
{
    
    console.log(nav);
    document.body.innerHTML="";
    document.body.innerHTML=nav;
}
catch(err)
{
    console.log(err.message);
}



let id=localStorage.getItem("id");



 function test()
{
    if(id!==null)
    {
        document.getElementById("login").style.display="none"
        document.getElementById("register").style.display="none"
        document.getElementById("dodaj").style.display="flex"
        document.getElementById("logout").style.display="flex"
        

        
    }
    else{
        document.getElementById("dodaj").style.display="none";
        document.getElementById("logout").style.display="none"
    }
}
function logout(){
    localStorage.removeItem("id");
    location.reload();
}
test();

