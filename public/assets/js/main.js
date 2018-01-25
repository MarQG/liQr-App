$('document').ready(function () {
    var drinkId = $('#newCommentForm').attr('data-dataid');
    console.log(drinkId)
    console.log('main.js connected');
    $('#commentForm').hide();
    $('.img').hide()
    $('.img').transition('jiggle');
    $('.drinkName').transition('jiggle');


    $('#test').on('click', function () {
        $('.ui.sidebar.inverted').sidebar('toggle')
    })

    $('#loginForm').form({
        fields: {
            email: {
                rules: [{
                    type: 'email',
                    message: 'Not a valid email. Please enter a valid email address.'
                }]

            },
            password: {
                rules: [{
                    type: 'empty',
                    message: 'Password cannot be empty.'
                }]

            }
        },
        onSuccess: function (e) {
            e.preventDefault();
            console.log('success ran');
            $.post('/login', {
                email: $('#emailForm').val().trim(),
                password: $('#passwordForm').val().trim()
            }).then(function () {
                window.location = "/drinks/";
                console.log('form Submitted');
            });
        }
    });

    $('#newCommentForm').form({
        fields: {

        },
        onSuccess: function (e) {
            console.log(drinkId);
            $.get('/api/user_data').then(function (user) {
                $.post('/api/comments', {
                    userId: user.userId,
                    comment: $('#commentText').val().trim(),
                    drinkId: drinkId
                }).then(function () {
                    location.reload();
                })
            })
        }
    });
    $('#upVote').on('click', function () {
        $.get('/api/user_data').then(function (user) {
            $.ajax({
                url: '/api/rating/' + drinkId + '/' + user.userId,
                type: 'GET',
                success: function(response){
                    $.ajax({
                        url: '/api/ratings/' + response.id,
                        type: 'PUT',
                        data: {
                            rating: true,
                            userId: response.userId,
                            drinkId: response.drinkId
                        },
                        success: function () {
                            location.reload()
                        }
                    })
                },
                error: function(response){
                    console.log(response)
                    //allow post rating
                    $.post('/api/ratings', {
                        rating: true,
                        userId: user.userId,
                        drinkId: drinkId
                    }).then(function () {
                        location.reload();
                    })
                }
            })
            
        })
    })
    $('#downVote').on('click', function () {
        $.get('/api/user_data').then(function (user) {
            $.ajax({
                url: '/api/rating/' + drinkId + '/' + user.userId,
                type: 'GET',
                success: function (response) {
                    $.ajax({
                        url: '/api/ratings/' + response.id,
                        type: 'PUT',
                        data: {
                            rating: false,
                            userId: response.userId,
                            drinkId: response.drinkId
                        },
                        success: function () {
                            location.reload()
                        }
                    })
                },
                error: function (response) {
                    console.log(response)
                    //allow post rating
                    $.post('/api/ratings', {
                        rating: false,
                        userId: user.userId,
                        drinkId: drinkId
                    }).then(function () {
                        location.reload();
                    })
                }
            })

        })
    })

    $('#newDrinkForm').form({
        fields: {
            name: {
                rules: [{
                    type: 'empty',
                    message: 'Cannot be empty, please enter a name'
                }]

            },
            description: {
                rules: [{
                    type: 'empty',
                    message: 'Cannot be empty, please enter a description'
                }]

            }, 
            imageLink: {
                rules: [{
                    type: 'url',
                    message: 'Please enter a valid Image URL.'
                }]

            },
            

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