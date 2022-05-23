function analyzuj() {

    //dlžka textu   
    let txt = document.getElementById("text").value;
    let length = txt.length;
    console.log(length);

    if (length == "")
        length = 0;

    //vypisovanie hodnôt do containera div
    let containerDiv = document.getElementById("container");
    containerDiv.innerHTML += "<h3>" + "Výsledky" + "</h3>"
    containerDiv.innerHTML += "<p>" + "Dlžka celého textu: " + length + "</p>"

    //dlžka textu bez medzier
    spocitaj = 0;

    for (let i = 0, len = txt.length; i < len; i++) {
        if (txt[i] !== ' ')
            spocitaj++;
    }
    console.log(spocitaj);
    containerDiv.innerHTML += "<p>" + "Dlžka textu bez medzier: " + spocitaj + "</p>"

    //počet čísiel v texte
    spocitaj2 = txt.replace(/[^0-9]/g, '').length;
    console.log(spocitaj2);
    containerDiv.innerHTML += "<p>" + "Počet čísel v texte: " + spocitaj2 + "</p>"


    //najdlhšie slovo v texte a počet jeho písmen
    let poleSlov = txt.split(' ');
    let najdlhsieSlovo = 0;
    let slovo = "";
    let slova = [];

    for (let i = 0; i < poleSlov.length; i++) {
        if (poleSlov[i].length >= najdlhsieSlovo) {
            najdlhsieSlovo = poleSlov[i].length

            slovo = poleSlov[i]
            //slova.push(slovo);
        }
    }
    console.log(poleSlov);
    console.log("Počet písmen najdlhšieho slova: " + najdlhsieSlovo);
    console.log("Najdlhšie slová: " + slovo);

    containerDiv.innerHTML += "<p>" + "Najdlhšie slová s počtom písmen " + najdlhsieSlovo + " sú: " + slovo + "</p>"
}

function zasifruj() {
    let txt = document.getElementById("text").value;
    //let zasifrovanyTxt = document.getElementById("text").value;
    let sifra = txt.replaceAll('O', '0').replaceAll('o', '0')
        .replaceAll('I', '1').replaceAll('i', '1')
        .replaceAll('E', '3').replaceAll('e', '3')
        .replaceAll('A', '4').replaceAll('a', '4')
        .replaceAll('S', '3').replaceAll('s', '3')
        .replaceAll('B', '8').replaceAll('b', '8');

    console.log(sifra);

    let containerDiv = document.getElementById("container");

    containerDiv.innerHTML += "<h3>" + "Zašifrovaný text" + "</h3>"
    containerDiv.innerHTML += "<p>" + sifra + "</p>"
}

function hladaj() {
    txt = document.getElementById("text").value;
    console.log(txt);


    hladaneSlovo = document.getElementById("search").value;
    console.log(hladaneSlovo);


    let vysledokHladania = txt.includes(hladaneSlovo);
    console.log(vysledokHladania);

    let containerDiv = document.getElementById("container");

    if (vysledokHladania == true) {
        console.log("naslo sa");
        containerDiv.innerHTML += "<p>" + "Hladaný text sa v texte nachádza &#128077; " + "</p>"

    } else {
        console.log("nenaslo sa");
        containerDiv.innerHTML += "<p>" + "Hladaný text sa v texte nenachádza &#128078;" + "</p>"
    }
}
