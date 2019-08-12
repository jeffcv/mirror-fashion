$('.menu-departamentos li:has(ul) > a').click(function(e){
e.preventDefault();//não deixar o link se comportar da forma padrão.
$(this).next('ul').slideToggle('fast');
});