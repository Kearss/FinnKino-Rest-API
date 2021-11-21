


// Valikko WIP
function Valikko() {
  // testasin valikkoo 
  var theatre = document.getElementById('selectTheatre');
  
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'https://www.finnkino.fi/xml/Schedule/', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
  
   if (theatre == "OMENA"){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'https://www.finnkino.fi/xml/Schedule/?area=1039', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
  }
}
//Hakee datan xml tiedostosta ja tekee listan uudelleen ja lajittelee kaikki oikeisiin taulukkoon.
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Title</th><th>Length (Minutes)</th><th>Rating</th><th>Year</th><th>Theatre</th><th>Poster</th></tr>";
    var x = xmlDoc.getElementsByTagName("Show");
    for (i = 0; i <x.length; i++) { 
      const imageUrl = x[i].getElementsByTagName('Images')[0].firstElementChild.textContent;
        table += "<tr><td>" +
        x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("LengthInMinutes")[0].childNodes[0].nodeValue +
        "</td><td>" +   
        x[i].getElementsByTagName("Rating")[0].childNodes[0].nodeValue +
        "</td><td>" +     
        x[i].getElementsByTagName("ProductionYear")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Theatre")[0].childNodes[0].nodeValue +
        '</td><td><img src=' +
        imageUrl +
        '></td></tr>';
    }
    document.getElementById("demo").innerHTML = table;
  }


  var selectTheatre = document.getElementById("selectTheatre");

  selectTheatre.addEventListener("change", function cc(){
  selectTheatre();
});

