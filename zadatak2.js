function promjenaDiv()
{
    var element2 = document.getElementById("golijat");
    if (element2.style.visibility == "visible"){
        element2.style.visibility = "hidden";
        document.getElementById("prikazi").innerHTML = "Pokazi";
    }
    else{
        element2.style.visibility = "visible";
        document.getElementById("prikazi").innerHTML = "Sakrij";
    }
}

function submit()
{
    var dodaj = document.getElementById("unos").value;
    var para = document.createElement("p");
    var dodaj = document.createTextNode(dodaj);
    para.appendChild(dodaj);
    var element = document.getElementById("div1");
    element.appendChild(para);

}

function promjenaBoje()
{
    var golijat = document.getElementById("div1");
    var unos = document.getElementById("bojeInput").value;
    golijat.style.backgroundColor=unos;
}