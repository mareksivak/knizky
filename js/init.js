// nacita obsah knizky zo suboru
function load_book_content(file, parent) {
    $.ajax({
        url : "books/"+file+".php",
        dataType: "text",
        success : function (data) {
            $(parent).html(data);
        }
    });
}

var areAnimationsFinished = true;
var pageLoaded = false;


// animuje zobrazenie skrytych kniziek
function animate_fade_in(element) {
    //element.css("opacity", "0");
    element.show();
    element.addClass("animated400 fadeIn");
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
    {
       element.removeClass('animated400 fadeIn');
    });
}

// skryje knizky
function animate_books_out(element, active) {
   
    element.addClass("animated400 fadeOut");
    $('html, body').animate({
        scrollTop: $(".js-active").offset().top
    }, 200);
    
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
    {
       element.removeClass('animated400 fadeOut');
        if (!element.hasClass('js-active')) element.addClass('js-hidden');
        window.scrollTo(0, 0);
    });
}

function animate_books_in(element) {
    
    element.removeClass("js-hidden");
    
    element.addClass("animated800 fadeIn");
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
    {
       element.removeClass('animated800 fadeIn');
    });
}

function show_book(block) {
    //var block = $(this);
    if (!areAnimationsFinished) return;
    
    if (block.hasClass('js-collapsed'))
    {
        
        
        block.removeClass("js-collapsed");
        block.addClass('js-active');


        animate_books_out($(".js-collapsed"), block);

        // show notes for selected book and nav arrow
        setTimeout(function(){
            animate_fade_in($(block).find(".book-memos-wrapper"));
            animate_fade_in($(block).find(".nav-arrow"));
        }, 200);


    }
    block.unbind("click");
}

// --- loading stuff

function append_book(id, primary, secondary, tertiary, file) {
    var book_template =

"<div class='block' id='block"+id+"'> \
    <div class='nav-arrow'> \
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24h-24z' fill='none'/><path class='vector' d='M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2z'/> \
        </svg> \
    </div> \
    <div class='primary'><span>"+primary+"</span></div> \
    <div class='secondary'><span>"+secondary+"</span></div> \
    <div class='tertiary'><span>"+tertiary+"</span></div> \
    <div class='book-memos-wrapper'> \
        <div class='book-memos'> \
        </div> \
    </div> \
</div> \
";

    $("#content").append(book_template);
    load_book_content(file, "#block" + id + " .book-memos");
}

function init_books() {
    append_book('260', 'Temná&nbsp;aréna', 'Mario Puzo', '', '260_puzo_temna_arena_view');
    append_book('259', 'Americký&nbsp;cisár', 'Martin Pollack', '', '259_americky_cisar_view');
    append_book('258', 'Dobrodružstvá Toma&nbsp;Sawyera', 'Mark Twain', '', '258_twain_tom_sawyer_view');
    append_book('257', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('256', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('255', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('254', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('253', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('252', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('251', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('250', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('249', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('248', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('247', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('246', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    
    
    
    
    
    $(".block").addClass("js-collapsed");
    
    $(".js-collapsed").click(function() 
    {
   //   if (!anim_finished) return;
        show_book($(this));
        
    });			


    $(".nav-arrow").click(function() {
        
        areAnimationsFinished = false;
        
        var back = $(this);
        var parentBlock = back.parent();
        if (back.parent().hasClass("js-active")) {
            
            
            animate_books_in($(".block.js-collapsed"));
            $('html, body').animate({
                scrollTop: $(".js-active").offset().top
            }, 100);
            
            // TODO animate out
            parentBlock.find(".book-memos-wrapper").hide();
            back.hide();
            
            parentBlock.removeClass('js-active');
            
            parentBlock.click(function()
            {
                show_book(parentBlock);
            });
            
            parentBlock.addClass("js-collapsed");
        }
        setTimeout(function(){
            areAnimationsFinished = true;
        }, 1000);
    });
}
 
        
init_books();