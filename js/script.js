$(function(){
    //on page load, hide the paragraphs about the work samples
    $('.work-info').hide();
    //when user hovers over image, reveal the description of the work.
    $('.work-sample').hover(
        function(){
            $(this).children('.project-img').hide();
            $(this).children('.work-info').show();
        }, function(){
             // hide description again when you hover away
            $(this).children('.work-info').hide();
            $(this).children('.project-img').show();
        }
    );
})
