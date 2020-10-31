// Variables

// This lets us get a reference to the note that's open so we can put it back on the board
let noteThatIsCurrentlyOpen = null;;
// This prevents us from running the animation multiple times until it's finished
let isNoteOpenAnimCompleted = true;

//
// Animations
//

const modalOpenAnim = anime({
    targets: '#modal-wrapper',
    translateY: '-50vh',
    opacity: 1,
    autoplay: false,
    easing: 'cubicBezier(0.415, 0.815, 0.600, 0.875)',
    delay: 400,
    duration: 400,
    begin: function(anim) {
        isNoteOpenAnimCompleted = false;
    },
    complete: function(anim) {
        isNoteOpenAnimCompleted = true;
    },
});

//
// Functions
//

function openModalAnim(noteId) {
    if (!isNoteOpenAnimCompleted) return; // If it's not completed, then return and do nothing
    
    // Add note to board if we're currently holding one
    putNoteOnBoardAnim();
    
    // Remove note from board
    noteThatIsCurrentlyOpen = document.querySelectorAll(`[data-note-id='${noteId}']`);
    takeNoteOffBoardAnim();

    // Make Modal Display as Block
    $("#note-modal").css("display", "block");

    // Open Modal
    modalOpenAnim.direction = "normal";
    modalOpenAnim.play();
};

function takeNoteOffBoardAnim() {
    anime({
        targets: noteThatIsCurrentlyOpen,
        translateY: -20,
        opacity: 0,
        easing: 'linear',
        duration: 400,
        complete: (anim) => {
            $(noteThatIsCurrentlyOpen).css("visibility", "hidden");
        }
    });
};

function putNoteOnBoardAnim() {
    if (noteThatIsCurrentlyOpen) {
        anime({
            targets: noteThatIsCurrentlyOpen,
            translateY: 0,
            opacity: 1,
            easing: 'linear',
            duration: 400,
            delay: 300,
            begin: (anim) => {
                $(noteThatIsCurrentlyOpen).css("visibility", "visible");
            }
        });
    };
};

function closeModalAnim() {
    if (!isNoteOpenAnimCompleted) return; // If it's not completed, then return and do nothing
    putNoteOnBoardAnim();
    modalOpenAnim.direction = "reverse";
    modalOpenAnim.play();
}

// This is what makes the notes look really good as they load onto the page
function initialNoteRenderAnim() {
    // We put these variables at the top so they are easier to change if we want to modify the animation
    const animDuration = 2000;
    const staggerInMs = 100;
    const rotationAmount = 25;
    const flutterAmountInX = 20;
    const flutterAmountInY = 10;
    const flutterVariation = 2;

    $('.wallnote img').css("opacity", 0);

    // Fade In
    anime({
        targets: '.wallnote img',
        opacity: 1,
        duration: animDuration,
        easing: 'linear',
        delay: anime.stagger(staggerInMs),
    });

    // Change Size and rotation as if falling in
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
            let destination = anime.random(-flutterAmountInX, flutterAmountInX);
            let path = [ 
                destination,
                destination * -flutterVariation,
                destination * flutterVariation,
                destination,
            ]
            return path;
        },
        top: () => {
            let destination = anime.random(-flutterAmountInY, flutterAmountInY);
            let path = [ 
                destination,
                destination * -flutterVariation,
                destination * flutterVariation,
                destination,
            ]
            return path;
        },
        easing: 'cubicBezier(0.465, 1.275, 0.550, -0.240)',
        duration: animDuration,
        delay: anime.stagger(staggerInMs),
    })
}