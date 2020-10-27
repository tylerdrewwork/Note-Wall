// This is the actual animation. You can reference noteOpen to run animation methods
const noteOpenAnim = anime({
    targets: '#note-new-form',
    translateY: -270,
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

function openNote() {
    if (!isNoteOpenAnimCompleted) return; // If it's not completed, then return and do nothing
    console.log("Opening note... ");
    noteOpenAnim.direction = "normal";
    noteOpenAnim.play();
}

function closeNote() {
    if (!isNoteOpenAnimCompleted) return; // If it's not completed, then return and do nothing
    noteOpenAnim.direction = "reverse";
    noteOpenAnim.play();
}