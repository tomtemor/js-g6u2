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
            },
            {title:"Porco Rosso", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/awEC-aLDzjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"Pom Poko", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/_7cowIHjCD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"Whisper of the Heart", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/0pVkiod6V0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"Princess Mononoke", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/4OiMOHRDs14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"My Neighbors the Yamadas", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/1C9ujuCPlnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"Spirited Away", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/ByXuk9QqQkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"The Cat Returns", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Gp-H_YOcYTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"Howl's Moving Castle", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/iwROgK94zcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"Tales from Earthsea", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/8hxYx3Jq3kI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"Ponyo", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/CsR3KVgBzSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"Arrietty", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/9CtIXPhPo0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"From Up on Poppy Hill", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/9nzpk_Br6yo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"The Wind Rises", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/2QFBZgAZx7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"The Tale of the Princess Kaguya", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/W71mtorCZDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"When Marnie Was There", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/jjmrxqcQdYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {title:"The Red Turtle", 
            trailer:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Sw7BggqBpTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ];
       // console.log(trailers[0].trailer);
       let siffra = 1;
        for (let i = 0; i < filmer.length; i++) {
            
            lista += "<table border=1><tr><td class = 'title' colspan=3>Titel: " + siffra +" " + filmer[i].title + "</div></td></tr>";
            lista += "<tr><td width='30%' class='myXDIV'><div class='myDIV'><img class='image' src=' " + filmer[i].image + "'></div></td>";
            lista += "<td > <button onclick='showVID(" + i + ")'>Visa/göm trailer</button> <div id='" + i + "'>";
             
            if ( trailers[i] === undefined ){
                trailer_trailer = "";
            } else {
            trailer_trailer = trailers[i].trailer;
            
        }
             
            lista += trailer_trailer;
           //   lista += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8ykEy-yPBFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

            lista += "</div></td><td>" + filmer[i].description +  "</td></tr></table>";
            siffra++;

            
          }

            output1.innerHTML=lista;

          // loop som gömmer alla video divs från början
            for (let i = 0; i < filmer.length; i++) { 
            var e = document.getElementById(i);
            if(e.offsetWidth > 0 || e.offsetHeight > 0){
              e.style.display = 'none';
            }}
            
          
    };
    

    
    forfragan.send();

}