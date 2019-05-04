/**
 * Question 1 (number-question)
 */
$("#button1").on("click", function(){
    var total1 = $("#total1").val();
    if ( total1 != "" ) {
        $("#total1").attr("readonly", "readonly");
        $(this).addClass("hidden");
        var resultMesage = "It's not correct."
        if ( total1 == 60) {
            pageScore = pageScore + 10;
            resultMesage = "It's correct"
        }
        $("#msgbox1").text(resultMesage);
        setTimeout(function(){
            Reveal.next();
        }, 1000);
    } 
});
