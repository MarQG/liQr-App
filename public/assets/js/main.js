$('document').ready(function(){
    console.log('main.js connected');
    $('#commentForm').hide();
    $('.img').hide()
    $('.img').transition('jiggle');
    $('.drinkName').transition('jiggle');
    
    
    $('#test').on('click',function () {$('.ui.sidebar.inverted').sidebar('toggle')}) 

    $('#loginForm').form({
        onSuccess: function(e) {
            // e.preventDefault();
            console.log('sucess ran')
            $.post('/login', {
                email: $('#emailForm').val().trim(),
                password: $('#passwordForm').val().trim()
            }).then(function() {
                console.log('form Submitted');
            })
        }
    })

    $('#newCommentForm').form({
        fields: {

        },
        onSuccess: function (e) {
            var url_array = document.location.split('/');
            var id = url_array[url_array.length - 1];
            e.preventDefault()
            $.get('/api/user_data').then(function (user) {
                $.post('/api/comments', {
                    userId: user.userId,
                    comment: $('#commentText').val().trim(),
                    drinkId: id
                })
            })
        }
    })

    $('#newDrinkForm').form({
        fields: {

        },
        onSuccess: function(e) {
            $.post('/api/drinks', {  
                    name: $('#drink_name_form').val().trim(),
                    description: $('#drink_desc_form').val().trim(),
                    imageLink: $('#drink_img_form').val().trim()               
            }).then(function(){
                window.location.href('/drinks')
            })
        }
    })

    $('#addComment').on('click',function() {
        $('#commentForm').show()
        $('#addComment').hide();

    })
    

});