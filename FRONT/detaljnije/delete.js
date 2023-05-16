async function obrisi()
{
    var id = location.search.substring(1);
    let idstring="http://localhost:8080/api/post/"+id;
    try{
        await axios.delete(idstring);
        //location.href="../index.html";
        window.history.back();
        window.alert("Uspesno ste obrisali recept")
    }
    catch(err)
    {
        console.log(err);
    }
}
obrisi();