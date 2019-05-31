var pitanja;
var tipka1;
var tipka2;
var tipka3;
var tipka4;
var tocna_tipka;
var polje;
var rez_polje;
var broj_pitanja = 0;
var tocnih = 0;
var jel_stisnija = false;

function postavi() {

    tipka1 = document.getElementById('tipka1');
    tipka2 = document.getElementById('tipka2');
    tipka3 = document.getElementById('tipka3');
    tipka4 = document.getElementById('tipka4');
    polje  = document.getElementById('pitanje_placeholder');

    tipka1.addEventListener("click", odgovori, false);
    tipka2.addEventListener("click", odgovori, false);
    tipka3.addEventListener("click", odgovori, false);
    tipka4.addEventListener("click", odgovori, false);

    for (let i = 0; i < json_pitanja.pitanje.length; i++) {
        var mjesto = Math.floor(Math.random() * json_pitanja.pitanje.length);
        var temp = json_pitanja.pitanje[i];
        json_pitanja.pitanje[i] = json_pitanja.pitanje[mjesto];
        json_pitanja.pitanje[mjesto] = temp;
    }
    postavi_tipke();
}

function odgovori(ova_tipka) {
    if (!jel_stisnija) {
        jel_stisnija = true;
        ova_tipka = ova_tipka.currentTarget;

        ova_tipka.style.color = "rgb(255, 255, 255)";
        tocna_tipka.style.backgroundColor = "rgb(60, 179, 113)";

        if (ova_tipka.value == tocna_tipka.value) {
            tocnih++;
        } else {
            ova_tipka.style.backgroundColor = "rgb(205, 92, 92)";
            tocna_tipka.style.color = "rgb(255, 255, 255)";
        }
        setTimeout(function () {
          ova_tipka.style.backgroundColor = "";
          tocna_tipka.style.backgroundColor = "";
          ova_tipka.style.color = "";
          tocna_tipka.style.color = "";

          broj_pitanja++;
          if (broj_pitanja == 7) {
              localStorage.setItem("br_tocnih", tocnih);
              window.location.href='./Seminar_rezultat.html';
          } else {
              postavi_tipke();
          }
          jel_stisnija = false;
        }, 1000);
    }
}

function postavi_tipke() {
    polje.innerHTML = "Pitanje broj " + (broj_pitanja + 1) + ".</br>" + json_pitanja.pitanje[broj_pitanja].text;

    for (let i = 0; i < 4; i++) {
        var mjesto = Math.floor(Math.random() * 4);
        var temp = json_pitanja.pitanje[broj_pitanja].odgovori[i];
        json_pitanja.pitanje[broj_pitanja].odgovori[i] = json_pitanja.pitanje[broj_pitanja].odgovori[mjesto];
        json_pitanja.pitanje[broj_pitanja].odgovori[mjesto] = temp;
    }

    tipka1.value = json_pitanja.pitanje[broj_pitanja].odgovori[0];
    if(tipka1.value == json_pitanja.pitanje[broj_pitanja].tocni) {
      tocna_tipka = tipka1;
    }

    tipka2.value = json_pitanja.pitanje[broj_pitanja].odgovori[1];
    if(tipka2.value == json_pitanja.pitanje[broj_pitanja].tocni) {
      tocna_tipka = tipka2;
    }

    tipka3.value = json_pitanja.pitanje[broj_pitanja].odgovori[2];
    if(tipka3.value == json_pitanja.pitanje[broj_pitanja].tocni) {
      tocna_tipka = tipka3;
    }

    tipka4.value = json_pitanja.pitanje[broj_pitanja].odgovori[3];
    if(tipka4.value == json_pitanja.pitanje[broj_pitanja].tocni) {
      tocna_tipka = tipka4;
    }

}

function rezultati() {
    tocnih = localStorage.getItem("br_tocnih");
    rez_polje = document.getElementById('rez_prostor');
    var rez_message = "Imate " + tocnih + " točnih odgovora!";
    rez_message += "</br>" + rez_opcije[tocnih] + "</br>Nadam se da vam se svidilo i hvala na pažnji";
    rez_polje.innerHTML = rez_message;
}

json_pitanja = {
  "pitanje":[
            {
                "text":     "Tko je 25. Pokemon?",
                "odgovori": ["Pikachu","Charizard","Ratata","Gengar"],
                "tocni":    "Pikachu"
            },
            {
                "text":     "Tko od ovih Pokemona NIJE starter?",
                "odgovori": ["Treecko","Froakie","Fennekin","Ferrothorn"],
                "tocni":    "Ferrothorn"
            },
            {
                "text":     "Koliko Pokemona postoje?",
                "odgovori": ["151","251","649","809"],
                "tocni":    "809"
            },
            {
                "text":     "Kojeg je tipa pokemon Lucario?",
                "odgovori": ["Figthting/Steel","Fighting","Psychic","Psychic/Steel"],
                "tocni":    "Figthting/Steel"
            },
            { //05
                "text":     "Iz koje je generacije pokemon Rayquaza?",
                "odgovori": ["Generacija 2","Generacija 3","Generacija 4","Generacija 7"],
                "tocni":    "Generacija 3"
            },
            {
                "text":     "Koliko Gym Badge-va je potrebno za pristup pokemon ligi?",
                "odgovori": ["12","6","8","10"],
                "tocni":    "8"
            },
            {
                "text":     "Tko je 151. Pokemon?",
                "odgovori": ["Mew","Mewtwo","Pikachu","Chikorita"],
                "tocni":    "Mew"
            },
            {
                "text":     "Koji od tipova NIJE tipicni tip startera?",
                "odgovori": ["Normal","Fire","Water","Grass"],
                "tocni":    "Normal"
            },
            {
                "text":     "Koja je poke-lopta najbolja u cijeloj igri?",
                "odgovori": ["Great Ball","Master Ball","Ultra Ball","Timer Ball"],
                "tocni":    "Master Ball"
            },
            { //10
                "text":     "Što od ovoga nije efektni status koji pokemon može dobiti?",
                "odgovori": ["Paralysis","Burn","Sleep","Cold"],
                "tocni":    "Cold"
            },
            {
                "text":     "Koji od ovih kamena NE izaziva evoluciju?",
                "odgovori": ["Water Stone","Thunder Stone","Dragon Stone","Fire Stone"],
                "tocni":    "Dragon Stone"
            },
            {
                "text":     "Koji je tip napada 'Hyper Beam'?",
                "odgovori": ["Psychic","Normal","Grass","Fairy"],
                "tocni":    "Normal"
            },
            {
                "text":     "Koji od ovih Pokemona NIJE evolucija od Eevee?",
                "odgovori": ["Vaporeon","Sylveon","Flygon","Leafon"],
                "tocni":    "Flygon"
            },
            {
                "text":     "Tko je Bog svih Pokemona?",
                "odgovori": ["Charizard","Arceus","Mew","Rayquaza"],
                "tocni":    "Arceus"
            },
            { //15
                "text":     "Kako se zove regija iz prve Pokemon igre?",
                "odgovori": ["Kanto","Sinnoh","Johto","Unova"],
                "tocni":    "Kanto"
            }
          ]
}

var rez_opcije = [
          "0 točnih odgovora baš i nije puno... ali nema veze, vjerujem da je vaše znanje u drugim stvarima!",
          "1 točan odgovor nije baš puno ali barem nije 0, ali važno je sudjelovati!",
          "2 točna odgovora je iskreno što sam i očekivao. Nebrinite, ne osuđujem!",
          "3 točna odgovora nažalost nije dovoljno za prolaz, vidimo se dogodine!",
          "4 točna odgovora je taman dovoljno za prolaz, ne morate izaći na ispit!",
          "5 točnih odgovora je prosječno znanje, što je sasvim uredu!",
          "6 točnih odgovora je veoma blizu ali ipak ne dovoljno, više sreće drugi put!",
          "7 točnih odgovora, sve točno! Ponosan sam na vas, znate više nego što sam mislio! "
]
