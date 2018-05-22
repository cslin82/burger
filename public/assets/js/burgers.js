$( document ).ready(function() {
    console.log( "ready!" );

    // listen for devour
    $('.burger-entry').on('click', '.devour', function(event) {
        event.preventDefault();
        var burgerId = $(this).data('id');
        console.log('devour clicked for burger id', burgerId);
        
        $.ajax({
            type: "PUT",
            url: '/api/burgers/' + burgerId,
            data: {
                id: burgerId,
                devoured: 1
            },
            success: () => location.reload(),
          });
    });



    // listen for create
    $('#burger-submit').click(function (event) {
        event.preventDefault();

        var burgerData = {};

        burgerData.burger_name = $('#burger-desc').val().trim();
        console.log(burgerData);

        $.post('/api/burgers', burgerData, function (data) {
            console.log('got data back:', data);
            location.reload();
        })
    })

}); // end jQuery wrapper
