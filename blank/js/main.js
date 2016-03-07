$(document).ready(function () {

    // click handler for submit button "Add"
    $('input[type="submit"]').click(function (event) {
        event.preventDefault();
        var newItem = $('#addItem').val();
        if (newItem != "") {
            $('ul').prepend('<li>' + newItem + '</li>');
        }
        $('#addItem').val('');
        var todos = $('ul').html();
        localStorage.setItem('todos', todos);
    });
    $('ul').on("click", "li", function () {
        $(this).toggleClass('complete');
    });

    if (localStorage.getItem('todos')) {
        $('ul').html(localStorage.getItem('todos'));
    }
});
