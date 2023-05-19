body=document.body.innerHTML;

async function onload(){
    let desert=await axios.get(LINK+"/api/post/desert");
    console.log(desert);
    let posts = desert.data.posts;
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
                                    <p style="width: auto;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;">${post.kratakopis}</p>
                                        <a href="../detaljnije/detaljnije.html?${post._id}"><button>Detaljnije</button></a>
                                </div>
                            </div>
                        </div>
        `
    });
    document.getElementById("container").innerHTML=div;
}
