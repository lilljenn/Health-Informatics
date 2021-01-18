    /*  function goPython(){
            $.ajax({
              url: "lilljenn.github.io/Health-Informatics/genes.py",
             context: document.body
            }).done(function() {
             alert('finished python script');;
            });
        }
*/
function postData(input) {
    $.ajax({
        type: "POST",
        url: "lilljenn.github.io/Health-Informatics/genes.py",
        data: { param: input },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    // do something with the response
    console.log(response);
    
}
/*

function goPython() {
  document.getElementById("genes").innerHTML = my_function();
  document.getElementById("genes").href = "lilljenn.github.io/Health-Informatics/genes.py";
  document.getElementById("genes").target = "_blank";
}


*/
