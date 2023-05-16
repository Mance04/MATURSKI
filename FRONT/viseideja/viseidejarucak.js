body=document.body.innerHTML;

async function onload(){
    let rucak=await axios.get(LINK+"/api/post/rucak");
    console.log(dorucak);
    let posts = rucak.data.posts;
    let div=``;
    posts.forEach(post => {
        div+=`
                        <div class="col-md-4">
                            <div class="food-items">
                                <img src="../pictures/${post.slika}">
                                <div class="details">
                                    <div class="details-sub">
                                        <h5>${post.imeJela}</h5>
                                    </div>
                                    <p style="">${post.kratakopis}</p>
                                        <a href="../detaljnije/detaljnije.html?${post._id}"><button>Detaljnije</button></a>
                                </div>
                            </div>
                        </div>
        `
    });
    document.getElementById("container").innerHTML=div;
}
