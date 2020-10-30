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
    $('.wallnote img').css("opacity", 0);

    // Fade In
    anime({
        targets: '.wallnote img',
        opacity: 1,
        duration: 2500,
        easing: 'linear',
        delay: anime.stagger(100),
    });

    // Change Size as if falling in
    anime({
        targets: '.wallnote img',
        rotate: function () {
            return anime.random(-25, 25);
        },
        scale: [2, 1],
        easing: 'linear',
        duration: 2500,
        delay: anime.stagger(100),
    });

    anime({
        targets: '.wallnote img',
        left: () => {
            return anime.random(-20, 20);
        },
        up: () => {
            return anime.random(-20, 20);
        },
        easing: 'cubicBezier(0.465, 1.275, 0.550, -0.240)',
        duration: 2500,
        delay: anime.stagger(100),
    })
}