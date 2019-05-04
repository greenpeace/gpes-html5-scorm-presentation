/**
 * Question 1
 */
$("#button1").on("click", function(){
    var total1 = $("#total1").val();
    if ( total1 != "" ) {
        $("#total1").attr("readonly", "readonly");
        if ( total1 == 60) {
            pageScore = pageScore + 10;
        }        
    }
    Reveal.next();
});