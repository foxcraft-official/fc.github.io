$(function(){
    $('a[scroll]').click(function(e){
        if(!$(this).attr('scroll').startsWith('#')) return 0
        $('html').stop().animate({scrollTop:$($(this).attr('scroll')).offset().top-70})
        return e.preventDefault()
    })
})