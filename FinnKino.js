function loadByTheatre(){
    var url = "https://www.finnkino.fi/xml/Schedule/";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
