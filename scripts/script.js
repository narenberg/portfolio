$(function(){
	$('#header').load('navbar.html', function(){
	    $('.navbar-content').each(function(){
	        if ($(this).children().prop('href') == window.location.href) {
	            $(this).addClass('active');
	        }
	    });
    });
    $('img').click(function(){
    	var cont = document.createElement('div');
    	var bigImage = document.createElement('img');
    	cont.classList.add('whole-page');
    	cont.onclick = function(){
    		$('.whole-page').hide();
    	}
    	bigImage.classList.add('large-in-charge');
    	bigImage.src = $(this).attr('src');
    	cont.appendChild(bigImage);
    	$('body').append(cont);
    })
});

