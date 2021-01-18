      /* function goPython(){
            $.ajax({
              url: "genes.py",
             context: document.body
            }).done(function() {
             alert('finished python script');;
            });
        }
*/
function myFunction() {
  document.getElementById("genes").innerHTML = "";
  document.getElementById("genes").href = "lilljenn.github.io/HealthInformatics/genes.py";
  document.getElementById("genes").target = "_blank";
}


