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

/**
 * Question 2 (multi-options-question)
 */
$("#button2").on("click", function(){
    var total2 = $("input[name=opt2]:checked").val();
    if ( total2 != "" ) {
        $('input[name=opt2]:not(:checked)').attr('disabled', true);
        $(this).addClass("hidden");
        var resultMesage = "It's not correct."
        if ( total2 == "B") {
            pageScore = pageScore + 10;
            resultMesage = "It's correct"
        }
        $("#msgbox2").text(resultMesage);
        setTimeout(function(){
            Reveal.next();
        }, 1000);
    }
});