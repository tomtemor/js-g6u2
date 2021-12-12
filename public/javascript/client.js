window.onload = function () {
  // Hämtar data från API.
  forfragan = new XMLHttpRequest();

  forfragan.open("GET", "https://ghibliapi.herokuapp.com/films");

  forfragan.onload = function () {
    console.log("Svar från servern");

    let filmer = JSON.parse(this.response);
    let lista = "";
    let trailer_trailer = "";
    // Array med lista av filmerna som objekt.
    let trailers = [
      {
        title: "Castle in the Sky",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/8ykEy-yPBFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Grave of the Fireflies",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/4vPeTSRd580" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "My Neighbor Totoro",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/92a7Hj0ijLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Kiki's Delivery Service",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/4bG17OYs-GA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Only Yesterday",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/x0ZrjocXVJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Porco Rosso",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/awEC-aLDzjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Pom Poko",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/_7cowIHjCD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Whisper of the Heart",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/0pVkiod6V0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Princess Mononoke",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/4OiMOHRDs14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "My Neighbors the Yamadas",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/1C9ujuCPlnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Spirited Away",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/ByXuk9QqQkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "The Cat Returns",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/Gp-H_YOcYTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Howl's Moving Castle",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/iwROgK94zcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Tales from Earthsea",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/8hxYx3Jq3kI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Ponyo",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/CsR3KVgBzSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "Arrietty",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/9CtIXPhPo0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "From Up on Poppy Hill",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/9nzpk_Br6yo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "The Wind Rises",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/2QFBZgAZx7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "The Tale of the Princess Kaguya",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/W71mtorCZDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "When Marnie Was There",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/jjmrxqcQdYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      {
        title: "The Red Turtle",
        trailer:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/Sw7BggqBpTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
    ];

    // Siffra är bara en räknare för numrering av filmerna i listan.
    let siffra = 1;
    lista += "<table border='0'>";

    for (let i = 0; i < filmer.length; i++) {
      // Loopar igenom alla filmer i filmer och sparar i lista.
      lista +=
        "<tr><td class = 'title' colspan=3>" +
        siffra +
        ". " +
        filmer[i].title +
        "</b> | " +
        filmer[i].release_date +
        " | " +
        filmer[i].original_title +
        "</div></td></tr>";
      lista +=
        "<tr><td style='border:none; width: 20%'> <div class='tab1'></div></td><td style='border:none; width: 40%;'></td><td style='border:none;'></td></tr>";
      lista +=
        "<tr><td> <img class='image' src=' " + filmer[i].image + "'></td>";
      lista +=
        "<td style='vertical-align: top;'> <button id='videb_" + i + "'onclick='showVID(" +
        i +
        ")'>visa trailer</button> <div id='" +
        i +
        "'>";

      if (trailers[i] === undefined) {
        trailer_trailer = "";
      } else {
        trailer_trailer = trailers[i].trailer;
      }

      lista += trailer_trailer; // Lägger till youtube-iframe-koden för trailern.

      lista += "</div></td><td style='vertical-align: top;'>" + filmer[i].description;
      //mer info-knappar och divs för innehållet
      lista += "<br><br><button id='morei_" + i + "' onclick='showInfo(" + i + ")'>mer info...</button><div id='info_" + i + "'>Director: " + filmer[i].director +"<br>Producer: " + filmer[i].producer +"<br>Lenght: " + filmer[i].running_time + " minutes" + "<br>Original title pronunciation: " + filmer[i].original_title_romanised;
      
      lista += "</div></td></tr>";
      siffra++;
    }

    lista += "</table>";

    output1.innerHTML = lista; // Skickar innehållet (html-koden) i 'lista' till en <p> med id output1 i index.html.

    // Loop som gömmer alla video divs och mer info-texter från början.
    for (let i = 0; i < filmer.length; i++) {
      let e = document.getElementById(i);
      let inf = document.getElementById("info_"+i);

      if (e.offsetWidth > 0 || e.offsetHeight > 0) {
        e.style.display = "none";
        inf.style.display = "none";
      }
    }
  };

  

  forfragan.send();
};

// Funktion för att gömma/visa filmerna anropas med onclick på knapparna
function showVID(i) {
  let x = document.getElementById(i);
  let videbu = document.getElementById("videb_"+i);
  videbu.innerText   = "visa trailer";

  if (x.style.display === "none") {
    x.style.display = "block";
    videbu.innerText   = "göm trailer";
  } else {
    x.style.display = "none";
    videbu.innerText   = "visa trailer";
  }
}

// Funktion för att gömma/visa mer info
function showInfo(i) {
  let inf = document.getElementById("info_"+i);
  let buu = document.getElementById("morei_"+i);
  
  buu.innerText   = "mer info...";
  
  if (inf.style.display === "none") {
    inf.style.display = "block";
    buu.innerText   = "göm info";
  } else {
    inf.style.display = "none"; 
    buu.innerText   = "mer info...";
 
  }
}