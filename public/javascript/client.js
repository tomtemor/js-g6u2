/*
Gruppuppgift del 2, hämta från API
SYNED21JON Grupp 6
LET Medlemmar [
{Christer Klasson}}, 
{Ida Gustafsson}, 
{Julia Magnusson}, 
{Marianne Nordlund}, 
{Matti Heinonen}, 
{Ronja Österback}

*/

function showVID(i) {
 
    var x = document.getElementById(i);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



window.onload = function() {
    

    // Hämtar data från API
    // 
    forfragan = new XMLHttpRequest();
    forfragan.open("GET", "https://ghibliapi.herokuapp.com/films");
    forfragan.onload = function() {
        console.log("Svar från servern");
        let filmer = JSON.parse(this.response);
        
       // console.log(filmer[0]);
        let lista = "";
        let image ="";
        let trailer_trailer = "";
        let trailers =[
            {title:'Castle in the Sky', 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/8ykEy-yPBFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:'Grave of the Fireflies', 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/4vPeTSRd580" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:'My Neighbor Totoro', 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/92a7Hj0ijLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"Kiki's Delivery Service", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/4bG17OYs-GA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"Only Yesterday", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/x0ZrjocXVJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        
        ];
       // console.log(trailers[0].trailer);
        for (let i = 0; i < filmer.length; i++) {
            
            lista += "<table border=1><tr><td class = 'title' colspan=3>Titel: "+ filmer[i].title + "</div></td></tr>";
            lista += "<tr><td width='30%' class='myXDIV'><div class='myDIV'><img class='image' src=' " + filmer[i].image + "'></div></td>";
            lista += "<td > <button onclick='showVID(" + i + ")'>Visa/göm trailer</button> <div class='hide' id='" + i + "'>";
             
            if ( trailers[i] === undefined ){
                trailer_trailer = "";
            } else {
            trailer_trailer = trailers[i].trailer;
        }
             
            lista += trailer_trailer;
           //   lista += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8ykEy-yPBFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

            lista += "</div></td><td>" + filmer[i].description +  "</td></tr></table>";
          }

            output1.innerHTML=lista;
          
    };
    forfragan.send();

}