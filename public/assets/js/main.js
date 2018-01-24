$('document').ready(function () {
    console.log('main.js connected');
    $('#commentForm').hide();
    $('.img').hide()
    $('.img').transition('jiggle');
    $('.drinkName').transition('jiggle');

    var people = document.querySelector('.people');
    setInterval(function () {

        people.classList.remove('anim');
        setTimeout(function () {
            people.classList.add('anim');
        }, 1000);
    }, 15000);


    $('#test').on('click', function () {
        $('.ui.sidebar.inverted').sidebar('toggle')
    })

    $('#newDrinkForm').form({
        fields: {

        },
        onSuccess: function (e) {
            $.post('/api/drinks', {
                name: $('#drink_name_form').val().trim(),
                description: $('#drink_desc_form').val().trim(),
                imageLink: $('#drink_img_form').val().trim()
            }).then(function () {
                window.location.href('/drinks')
            })
        }
    })

    $('#addComment').on('click', function () {
        $('#commentForm').show()
        $('#addComment').hide();

    })


});