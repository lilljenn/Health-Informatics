//function goPython() {
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "lilljenn.github.io/Health-Informatics/genes.py", true);
  xhttp.send();
}
//}
/*

function goPython() {
  document.getElementById("genes").innerHTML = "response";
  document.getElementById("genes").href = "lilljenn.github.io/Health-Informatics/genes.py";
  document.getElementById("genes").target = "_blank";
}


*/
