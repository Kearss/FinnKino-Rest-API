function loadDoc() {
    var url = "https://www.finnkino.fi/xml/Schedule/";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Title</th><th>LengthInMinutes</th><th>Rating</th><th>ProductionYear</th><th>Theatre</th></tr>";
    var x = xmlDoc.getElementsByTagName("Show");
    for (i = 0; i <x.length; i++) { 
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
        "</td><td>";
    }
    document.getElementById("demo").innerHTML = table;
  }