// Handling new object when user clicks the "Add a Note" button

// On click event
$("#add-btn").on("click", function(event) {
    event.preventDefault();
console.log("clicked");
    // Make a newNote object
    let newNote = {
        text: $("#newNoteText").val().trim()
    };

// Sending AJAX Post request of newNote object
    $.post("/api/new", newNote)
    .then(function(data) {
        console.log(data);
        $("#modal").css("display", "none");
        location.reload();
    });


// Empties out each input box by replacing value with empty string
    $("#newNoteText").val("");
});