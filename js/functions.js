var pContainerHeight = $('.header').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /1.1 +'%)'
    });

    $('.bird').css({
      'transform' : 'translate('+ wScroll /1.1 +'%,'+ wScroll /34 +'%)'
    });

    $('.smallBirds').css({
      'transform' : 'translate('+ wScroll /30 +'%,'+ wScroll /50 +'%)'
    });

  }

  if(wScroll > $('.gallery').offset().top - ($(window).height() / 1.2)) {

    $('.gallery figure').each(function(i){

      setTimeout(function(){
        $('.gallery figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }

  if(wScroll > $('.blog-post').offset().top - $(window).height()) {

    var offset = Math.min(0, wScroll - $('.blog-post').offset().top + $(window).height() - 400);

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }


});