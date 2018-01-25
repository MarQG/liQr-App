$('document').ready(function () {
    var drinkId = $('#newCommentForm').attr('data-dataid');
    console.log(drinkId)
    console.log('main.js connected');
    $('#commentForm').hide();
    $('.editCommentForm').hide();
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
            $.post('/login', {
                email: $('#emailForm').val().trim(),
                password: $('#passwordForm').val().trim()
            }).then(function (results) {
                console.log(results);
                window.location = "/drinks/";
                console.log('form Submitted');
            });
        }
    });
    $('#signup').form({
        fields: {
            email: {
                rules: [{
                    type: 'email',
                    message: 'Not a valid email. Please enter a valid email address.'
                }]

            },
            firstname: {
                rules:[{
                    type: 'empty',
                    message: 'Enter your first name'
                }]  
            },
            lastname:{
                rules: [{
                        type: 'empty',
                        message: 'Enter your last name'
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
            $.post('/register', {
                email: $('#email-Form').val().trim(),
                password: $('#password-Form').val().trim(),
                firstname: $('#firstName-Form').val().trim(),
                lastname: $('#lastName-Form').val().trim()

            }).then(function (results) {
                console.log(results);
                window.location = "/drinks/";
                console.log('form Submitted');
            });
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
                    type: 'regExp',
                    value:  /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
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

    // ======= Comment Section =======

    $('#newCommentForm').form({
        fields: {

        },
        onSuccess: function (e) {

            $.get('/api/user_data').then(function (user) {
                $.post('/api/comments', {
                    userId: user.userId,
                    comment: $('#commentText').val().trim(),
                    drinkId: drinkId
                }).then(function () {
                    setTimeout(function(){
                        location.reload();
                    }, 500)
                   
                })
            })
        }
    });

    $('#addComment').on('click', function () {
        $('#commentForm').show()
        $('#addComment').hide();

    })
    $('.edit-comment').on("click",function(){
       var commentId = $(this).attr('data-commentId');
       $('.editCommentForm[data-formId='+ commentId +']').show()

    })

    $('button[type="submit"]').on('click', function(e){
        var commentId = $(this).attr('data-id');

        $('.edit-CommentForm[data-id="'+ commentId + '"]').form({
            onSuccess: function() {
                var commentId = $(this).attr('data-id');
                $.get('/api/user_data').then(function (user) {
                    $.ajax({
                        url: '/api/comments/' + commentId,
                        type: 'PUT',
                        data : {
                            comment: $('#editCommentText[data-textId = "' + commentId + '"]').val().trim(),
                            drinkId: drinkId,
                            userId: user.userId
                        },
                        success: function () {
                            location.reload();
                        }
                    });
                })
            }
        })
    });

    $('.delete-comment').on('click', function(){
        var commentId = $(this).attr("data-commentId");
        $.ajax({
            type: "DELETE",
            url: '/api/comments/' + commentId,
        }).then(function(){
            location.reload();
        });
    });
});