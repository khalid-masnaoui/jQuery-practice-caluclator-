$(function() {


    let L = "+*-/";
    // numbers
    $(".number").click(function(e) {
        $("input").val($("input").val() + $(this).text())
    });


    // operators
    $(".operator").click(function() {

        if (L.indexOf($("input").val().substr($("input").val().length - 1, 1)) == -1) { $("input").val($("input").val() + $(this).text()) } else {
            $("input").val($("input").val().substr(0, $("input").val().length - 1) + $(this).text());
        }




    });

    // equal

    $(".eq").click(function() {

        if (L.indexOf($("input").val().substr($("input").val().length - 1, 1)) != -1) {
            alert("not valid");
        } else {
            $("input").val(eval($("input").val()))
        }

    });


    //clear

    $(".clear").click(function() {
        $("input").val("");

    });

    // back
    $(".back").click(function() {
        $("input").val($("input").val().substr(0, $("input").val().length - 1));

    });

    //point

    $(".point").click(function(e) {
        $("input").val($("input").val() + $(this).text())
    });
})