/**** JAVASCRIPT ****/

/* NAVICON JS */

var navicon = ".navicon";

var mainmenu = "#mainmenu";

$(document).ready(function() {
    $("#mainmenu").hide();
    $(".navicon").click(function() {
        $("#mainmenu").slideToggle("slow", 500);
    });
});