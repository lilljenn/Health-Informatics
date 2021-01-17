      /* function goPython(){
            $.ajax({
              url: "genes.py",
             context: document.body
            }).done(function() {
             alert('finished python script');;
            });
        }
*/
$.ajax({
  type: "POST",
  url: "~/pythoncode.py",
  data: { param: text}
}).done(function( o ) {
   // do something
      document.getElementById("genes").innerHTML = "Hello JavaScript!";
});

