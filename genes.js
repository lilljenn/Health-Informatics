      /* function goPython(){
            $.ajax({
              url: "genes.py",
             context: document.body
            }).done(function() {
             alert('finished python script');;
            });
        }
*/
function goPython() {
  document.getElementById("genes").innerHTML = "inner html";
  document.getElementById("genes").href = "lilljenn.github.io/HealthInformatics/genes.py";
  document.getElementById("genes").target = "_blank";
}


