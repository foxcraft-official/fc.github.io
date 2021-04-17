let asyncImg;
$(function(){
    asyncImg = $(".asyncImage");
    asyncImg.map((index) => {
        let eIMG = $(".asyncImage").eq(index);
        eIMG.removeClass(".asyncImage");
        let qualities = JSON.parse(eIMG.attr("qualities"));
        eIMG.removeAttr("qualities");
        for(let i = 0; i < qualities.length; i++){
            let image = new Image();
            image.src = qualities[i];
            image.onload = () => {
                eIMG.attr("src", qualities[i]);
            }
        }
    });
    $('a[scroll]').click(function(e){
        if(!$(this).attr('scroll').startsWith('#')) return 0
        $('html').stop().animate({scrollTop:$($(this).attr('scroll')).offset().top-100})
        return e.preventDefault()
    })
})