


// Valikko WIP toimii 
function ListLoad() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'https://www.finnkino.fi/xml/Schedule/', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
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



//Search function toimii mutta ei ota huomioon teatterin valintaa
//

//Variable the get the text from inputfield
const SearchInput = document.getElementById('Title');
//when user key is pressed up function is called
SearchInput.addEventListener('keyup', searchMovie);

function searchMovie()
{
  //variable which gets the userinput and makes it uppercase
  var userInput = this.value.toUpperCase();
  //Variable which selects the table "demo"
  var table = document.getElementById("demo");
  //variable gets the table row from "demo"
  var row = table.getElementsByTagName("tr");
  //for loop that goes through all the rows
  for (i = 0; i < row.length; i++) 
  { 
    //variable to get tabledata from rows index for movie
    td = row[i].getElementsByTagName("td")[0];
    //variable of user selected theather from dropdown menu
    var selectedTheather = document.getElementById("selectTheatre").value;
    //variable to get tabledata from rows index for theather
    var theather = row[i].getElementsByTagName("td")[4];
    //if all theathers is selected only comparing user input into movies
    if (selectedTheather == "Choose")
    {
      if (td) 
      {
        //if table data matches the userinput
        if (td.innerHTML.toUpperCase().indexOf(userInput) > -1) 
        { 
          //if matches row display is not changed
          row[i].style.display = "";
        } 
        else 
        {
          //if doesnt match row display goes away
          row[i].style.display = "none"; 
        }
      } 
    } 
    // if user input is not all theathers, compare user input into movies in selected theather
    else 
    {
    //if table data is not null
    if (td) 
    {
      //if table data matches the userinput
      if (td.innerHTML.toUpperCase().indexOf(userInput) > -1 && theather.innerHTML.toLocaleUpperCase().indexOf(selectedTheather) > -1) 
      { 
        //if matches row display is not changed
        row[i].style.display = "";
      } 
      else 
      {
        //if doesnt match row display goes away
        row[i].style.display = "none"; 
      }
    } 
  }
  }
}

//Select theateri function toimii vähän huonosti
//"All theathers" ei toimi ollennkaan
//
//
//Jouduin kommentoimaan pois vähän sun koodia
//
//@@@@@@@@@@@@@
//
// ei toimi 
//var selectTheatre = document.getElementById("selectTheatre");
// ei toimi
//  selectTheatre.addEventListener("change", function cc(){
//  selectTheatre();
//});
//
//
// @@@@@@@@@@@@



//function to select a theatre from drop down menu
function selectTheatre()
{
  //variable to use the dropdown menu
  var theatherSelection = document.getElementById("selectTheatre").value;
  //
  //user selected value from dropdown menu
  //var userSelection = theatherSelection.value;
  //
  //variable to get the table "demo"
  var table = document.getElementById("demo");
  //variable to seelect the tablerow
  var row = table.getElementsByTagName("tr");
  //for loop to get all the rows
  if
  (document.getElementById('selectTheatre').value == "Choose")
  {
    ListLoad()
    document.getElementById('Title').value = '';
  } 
  else
  {
  for (i = 0; i < row.length; i++) 
  { 
    //variable to get the table data from position 5
    td = row[i].getElementsByTagName("td")[4];
    // if table data is not null
    if (td) 
    {
      //check if tabledata matches user selected value from dropdown menu
      if (td.innerHTML.toUpperCase().indexOf(theatherSelection) > -1) 
      { 
        //if matches row display is not changed
        row[i].style.display = "";
        document.getElementById('Title').value = '';
      } 
      else 
      {
        //if doesnt match row display goes away
        row[i].style.display = "none";
        document.getElementById('Title').value = '';
      }
    } 
  }
  }
}
