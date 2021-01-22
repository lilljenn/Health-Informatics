// This is the client-side script.

// Initialize the HTTP request.
function ProcessSimpleCgi()
{
    param1Data = $("#param1").val();
    param2Data = $("#param2").val();
    params = "param1=" + param1Data + "&param2=" + param2Data;
    $.ajax(
    {
        type: "POST",
        url: "lilljenn.github.io/Health-Informatics/genes.py",
        data: params,
        dataType: "html",
        success: function (html)
        {
            var params = $(html).filter(function(){ return $(this).is('p') });
            params.each(
                function()
                {
                    var value = "<li>" + $(this).html() + "</li>";
                    $("#paramsList").append( value );
                }
            );
        },
        error: function(request, ajaxOptions, thrownError)
        {
            $("#debug").html(request.responseText);
            $("#debug").html("5566");
        }

    });
}

// Send the request to send-ajax-data.php
//xhr.send(null);
//function goPython() {
//  document.getElementById("genes").innerHTML = "response";
//  document.getElementById("genes").href = "lilljenn.github.io/Health-Informatics/genes.py";
//  document.getElementById("genes").target = "_blank";
//}


*/
