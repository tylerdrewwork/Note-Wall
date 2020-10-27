// Config for front end:
const mobileSizeInPx = 425;
const notesToDisplayOnMobile = 20;
const notesToDisplayOnDesktop = 25;

// Functions:

function init() {
    let numberOfNotesToDisplay;

    // Check to see if the screen width is larger or smaller than mobileSizeInPx
    if($(window).width() <= mobileSizeInPx) {
        // Display notes on mobile
        console.log("Screen width is less than", mobileSizeInPx + "px.");
        numberOfNotesToDisplay = notesToDisplayOnMobile;
    } else {
        // Display notes on desktop
        console.log("Screen width is greater than", mobileSizeInPx + "px.");
        numberOfNotesToDisplay = notesToDisplayOnDesktop;
    }

    // Render notes onto the note wall
    for (let i = 0; i < numberOfNotesToDisplay; i++) {
        console.log("adding a note to wall")
        $("#note-wall-container").append(`<div class="wallnote"></div>`);
    }
}


init();