function openNote() {
    console.log("Opening note... ");

    let element = $("#note-new-form");

    anime({
        targets: '#note-new-form',
        translateY: -270,
        opacity: 1,
    })
}

function closeNote() {
    
}