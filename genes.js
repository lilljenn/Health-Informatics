       function goPython(){
            $.ajax({
              url: "genes.py",
             context: document.body
            }).done(function() {
             alert('finished python script');;
            });
        }
