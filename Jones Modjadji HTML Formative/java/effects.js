$(function() {

  $('content').hide().slideDown();
  var $li = $('b1');
  
  $li.hide().each(function(index) {
    $(this).delay(2500 * index).fadeIn(1500);
  });
	
  $li.on('click', function() {
    $(this).fadeOut(700);
  });
  });