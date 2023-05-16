body=document.body.innerHTML;

async function onload(){
    let dorucak=await axios.get(LINK+"/api/post/dorucak");
    let rucak=await axios.get(LINK+"/api/post/rucak");
    let vecera=await axios.get(LINK+"/api/post/vecera");
    let desert=await axios.get(LINK+"/api/post/desert");
    console.log(dorucak);
    
    let postsd = dorucak.data.posts;
    let postsr=rucak.data.posts;
    let postsv=vecera.data.posts;
    let postsde=desert.data.posts;
    console.log(postsd);
    let div=``;
    let div1=``;
    let div2=``;
    let div3=``;
    for(let i = postsd.length-1;i>postsd.length-4;i--){
        let post=postsd[i];
        div+=`
                        <div class="col-md-4">
                            <div class="food-items">
                                <img src="../pictures/${post.slika}">
                                <div class="details">
                                    <div class="details-sub">
                                        <h5>${post.imeJela}</h5>
                                    </div>
                                    <p style="width: auto;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;">${post.kratakopis}</p>
                                        <a href="../detaljnije/detaljnije.html?${post._id}"><button>Detaljnije</button></a>
                                </div>
                            </div>
                        </div>
        `
    }
    for(let i = postsr.length-1;i>postsr.length-4;i--){
        let post1=postsr[i];
        div1+=`
                        <div class="col-md-4">
                            <div class="food-items">
                                <img src="../pictures/${post1.slika}">
                                <div class="details">
                                    <div class="details-sub">
                                        <h5>${post1.imeJela}</h5>
                                    </div>
                                    <p style="width: auto;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;">${post1.kratakopis}</p>
                                        <a href="../detaljnije/detaljnije.html?${post1._id}"><button>Detaljnije</button></a>
                                </div>
                            </div>
                        </div>
        `
    }

    for(let i = postsv.length-1;i>postsv.length-4;i--)
    {
        let post2=postsv[i];

        div2+=`
                        <div class="col-md-4">
                            <div class="food-items">
                                <img src="../pictures/${post2.slika}">
                                <div class="details">
                                    <div class="details-sub">
                                        <h5>${post2.imeJela}</h5>
                                    </div>
                                    <p style="width: auto;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;">${post2.kratakopis}</p>
                                        <a href="../detaljnije/detaljnije.html?${post2._id}"><button>Detaljnije</button></a>
                                </div>
                            </div>
                        </div>
        `
    }
    for(let i = postsde.length-1;i>postsde.length-4;i--)
    {
        let post3=postsde[i];

        div3+=`
                        <div class="col-md-4">
                            <div class="food-items">
                                <img src="../pictures/${post3.slika}">
                                <div class="details">
                                    <div class="details-sub">
                                        <h5>${post3.imeJela}</h5>
                                    </div>
                                    <p style="width: auto;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;">${post3.kratakopis}</p>
                                        <a href="../detaljnije/detaljnije.html?${post3._id}"><button>Detaljnije</button></a>
                                </div>
                            </div>
                        </div>
        `
    }
    

    document.getElementById("dorucak").innerHTML=div;
    document.getElementById("rucak").innerHTML=div1;
    document.getElementById("vecera").innerHTML=div2;
    document.getElementById("desert").innerHTML=div3;
}
