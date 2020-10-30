// This is the actual animation. You can reference noteOpenAnim to run animation methods
const modalOpenAnim = anime({
    targets: '#modal-wrapper',
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

const removeNoteFromWallAnim = anime({
    targets: ''
})
// This prevents us from running the animation multiple times until it's finished
let isNoteOpenAnimCompleted = true;


//
// Functions
//

function openModalAnim(noteId) {
    if (!isNoteOpenAnimCompleted) return; // If it's not completed, then return and do nothing
    console.log("Opening note... ");
    modalOpenAnim.direction = "normal";
    modalOpenAnim.play();
}

function closeModalAnim() {
    if (!isNoteOpenAnimCompleted) return; // If it's not completed, then return and do nothing
    modalOpenAnim.direction = "reverse";
    modalOpenAnim.play();
}

// This is what makes the notes look really good as they load onto the page
function initialNoteRenderAnim() {
    // We put these variables at the top so they are easier to change if we want to modify the animation
    const animDuration = 2500;
    const staggerInMs = 100;
    const rotationAmount = 25;
    const flutterAmount = 20;

    $('.wallnote img').css("opacity", 0);

    // Fade In
    anime({
        targets: '.wallnote img',
        opacity: 1,
        duration: animDuration,
        easing: 'linear',
        delay: anime.stagger(staggerInMs),
    });

    // Change Size as if falling in
    anime({
        targets: '.wallnote img',
        rotate: function () {
            return anime.random(-rotationAmount, rotationAmount);
        },
        scale: [2, 1],
        easing: 'linear',
        duration: animDuration,
        delay: anime.stagger(staggerInMs),
    });

    // Change position as if paper is fluttering onto the page
    anime({
        targets: '.wallnote img',
        left: () => {
            return anime.random(-flutterAmount, flutterAmount);
        },
        up: () => {
            return anime.random(-flutterAmount, flutterAmount);
        },
        easing: 'cubicBezier(0.465, 1.275, 0.550, -0.240)',
        duration: animDuration,
        delay: anime.stagger(staggerInMs),
    })
}