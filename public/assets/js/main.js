$('document').ready(function(){
    console.log('main.js connected');
    
    $('#test').on('click',function () {$('.ui.sidebar.inverted').sidebar('toggle')}) 

});