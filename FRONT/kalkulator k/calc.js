var kalorije = 0;

function izracunajk(){
    var pol = document.getElementById("Pol").value;
    var visina = document.getElementById("Visina").value;
    var kilaza = document.getElementById("Tezina").value;
    var godine = document.getElementById("Godine").value;
    if(pol == "2"){
        kalorije = 660 + (13.7 * kilaza) + (5 * visina) - (6.8 * godine);
    }
    else{
        kalorije = 655 + (9.6 * kilaza)+(1.8 * visina) - (4.7 * godine);
    }
    kalorije=Math.round(kalorije);
    document.getElementById("kalorije").innerHTML = kalorije;
}