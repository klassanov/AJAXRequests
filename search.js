

window.onload = function () {

    $("#searchFruit").keypress(function(e){
        if(e.keyCode==13)
        {            
            $("#searchButton").click();
        }
      
    });

    $("#searchButton").click(function () {

        var searchPath=$("#searchFruit").val()+".xml";        
        $("#searchResults").empty();

        /*
        switch ($("#searchFruit").val()) {
            case 'long':
                searchPath = "long.xml";
                break;

            case 'round':
                searchPath = "round.xml";
                break;

            case "orange":
                searchPath = "orange.xml";
                break;

            default:
                InvalidSearchTerm();
                break;
        }
        */

        $.ajax({
            url: searchPath,
            cache: false,
            //dataType:"xml",
            success: function (data) {
                var fruits = $(data).find("fruit");
                if (fruits.length > 0) {
                    $(fruits).each(
                        function () {
                            $("#searchResults").append($(this).text());
                            $("#searchResults").append("<br />");
                        })
                }
                else {
                    $("#searchResults").append("Sorry, nothing was found.");
                }

            },
            error: function (xhr, statusCode, errorThrown, ) {
                $("#searchResults").append("An Error occurred <br />");
                $("#searchResults").append(errorThrown);
            }

        });

    });

}




function InvalidSearchTerm() {
    $('#searchResults').empty();
    $('#searchResults').append('Invalid Search Term. Please try again.');
}