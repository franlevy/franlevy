/**** JAVASCRIPT ****/

/* NAVICON FOR MOBILE MENU */

$(document).ready(function() {
    
    // Check browser window size to determine whether the main menu is hidden or visible
    $(window).resize(function() {
        // Add a set timeout to prevent resource hogging
        myWinWidth();
    });

    function myWinWidth() {
        var winWidth = $(window).width();
        console.log(winWidth);    
            if(winWidth > 650){
                $("#mainmenu").show();          
            }
            if(winWidth < 650){
                $("#mainmenu").hide();          
            }
        return false;
    };

    // Navicon and main menu variables and functions
    var navicon = ".navicon";
    var mainmenu = "#mainmenu";

    // $(mainmenu).hide();
    myWinWidth();
    
    $(navicon).click(function(event) {
        $(mainmenu).slideToggle(500);
        event.preventDefault();
    });
});

/* OPEN EXTERNAL LINKS IN NEW TABS OR WINDOWS */
// Note: The user's individual browser settings determine whether the link will open a new tab or a new window.

$(document).ready(function() {
    
    $( 'a[href^="http://"]' )
        .attr( 'target','_blank' )
        .addClass( 'external_link' );

    $( 'a[href^="https://"]' )
        .attr( 'target','_blank' )
        .addClass( 'external_link' );
});