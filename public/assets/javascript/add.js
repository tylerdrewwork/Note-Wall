// Handling new object when user clicks the "Add a Note" button

// On click event
$("#add-btn").on("click", function(event) {
    event.preventDefault();

    // Make a newNote object
    let newNote = {
        text: $("#text").val().trim(),
        views: $("#views").val().trim(),
        author_id: $("author_id").val().trim()
    };

// Sending AJAX Post request of newNote object
    $.post("/api/new", newNote)
    .then(function(data) {
        console.log(data);
    });

// Empties out each input box by replacing value with empty string
    $("#text").val("");
    $("#views").val("");
    $("author_id").val("");
});