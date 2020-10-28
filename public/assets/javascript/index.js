// Config for front end:
const mobileSizeInPx = 425; // if you change mobileSizeInPx, make sure to change the media query in style.scss!
const notesToDisplayOnMobile = 16; // if either of these are changed, the grid in the stylesheet needs to be changed.
const notesToDisplayOnDesktop = 20;

// Run on page load is finished
$(document).ready(function() {
    function AddNotesToPage() {
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
            // $("#note-wall-container").append(`<div class="wallnote"></div>`);
            $("#note-wall-container").append(`<img class="wallnote" src="assets/svg/sticky_note.svg" alt="note" onclick="showNote()"></img>`);
           
        }
    }

    function GetAmountOfNotesInDatabase() {
        // ajax query to api/notes/count
    }

    AddNotesToPage();
    GetAmountOfNotesInDatabase();
});

function showNewNoteForm() {
    // $("#note-display__new");
}

function showNote() {
    openNoteAnim();
    // dod something stupid

}