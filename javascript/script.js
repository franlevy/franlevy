/**** JAVASCRIPT ****/

/* NAVICON FOR MOBILE MENU */

$(document).ready(function() {
    
    // Check browser window size to determine whether the main menu is hidden or visible
    $(window).resize(function() {
        // Add a set timeout to prevent resource hogging
        myWinWidth(500);
    });

    function myWinWidth() {
        var winWidth = $(window).width();
        console.log(winWidth);    
            if(winWidth > 650){
                     $("#mainmenu").show();          
            }
        return false;
    };

    // Navicon and main menu variables and functions
    var navicon = ".navicon";
    var mainmenu = "#mainmenu";

    $("#mainmenu").hide();
    
    $(".navicon").click(function() {
        $("#mainmenu").slideToggle("slow");
    });
});