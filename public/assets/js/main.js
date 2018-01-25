$('document').ready(function(){
    console.log('main.js connected');
    $('#commentForm').hide();
    $('.img').hide()
    $('.img').transition('jiggle');
    $('.drinkName').transition('jiggle');
    
    
    $('#test').on('click',function () {$('.ui.sidebar.inverted').sidebar('toggle')})
    
    $('#newCommentForm').form({
        fields: {

        },
        onSuccess: function(){
            $.get('/api/user_data'),{
                
            }
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