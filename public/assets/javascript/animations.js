// This is the actual animation. You can reference noteOpenAnim to run animation methods
const noteOpenAnim = anime({
    targets: '#note-modal',
    translateY: '-50vh',
    opacity: 1,
    autoplay: false,
    easing: 'cubicBezier(0.415, 0.815, 0.600, 0.875)',
    duration: 400,
    begin: function(anim) {
        isNoteOpenAnimCompleted = false;
    },
    complete: function(anim) {
        isNoteOpenAnimCompleted = true;
    },
})
// This prevents us from running the animation multiple times until it's finished
let isNoteOpenAnimCompleted = true;


//
// Functions
//

function openNoteAnim() {
    if (!isNoteOpenAnimCompleted) return; // If it's not completed, then return and do nothing
    console.log("Opening note... ");
    noteOpenAnim.direction = "normal";
    noteOpenAnim.play();
}

function closeNoteAnim() {
    if (!isNoteOpenAnimCompleted) return; // If it's not completed, then return and do nothing
    noteOpenAnim.direction = "reverse";
    noteOpenAnim.play();
}

// This is what makes the notes look really good as they load onto the page
function initialNoteRenderAnim() {
    $('.wallnote').css("opacity", 0);
    $('.wallnote').css("opacity", 0);

    anime({
        targets: '.wallnote',
        opacity: 1,
        duration: 2500,
        easing: 'linear',
        delay: anime.stagger(50),
    });
}