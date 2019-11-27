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
    element.addClass("animated200 fadeIn");
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
    {
       element.removeClass('animated200 fadeIn');
    });
}

// skryje knizky
function animate_books_out(element, active) {

    element.addClass("animated200 fadeOut");
    $('html, body').animate({
        scrollTop: $(".js-active").offset().top
    }, 200);

    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
    {
       element.removeClass('animated200 fadeOut');
        if (!element.hasClass('js-active')) element.addClass('js-hidden');
        window.scrollTo(0, 0);
    });
}

function animate_books_in(element) {

    element.removeClass("js-hidden");

    element.addClass("animated200 fadeIn");
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',  function()
    {
       element.removeClass('animated200 fadeIn');
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
    append_book('298', 'The Amazon Way', '14 Leadership Principles', '', '298_amazon_view');
    append_book('297', 'The Power of Moments', '', '', '297_power_of_moments_view');
    append_book('296', 'Flow', 'Mihaly Csikszentmihalyi', '', '296_flow_view');
    append_book('290', 'The Design of Everyday Things', 'Donald Norman', '', '290_design_of_everyday_things_view');
    append_book('295', 'Emotional Design', 'Donald Norman', '', '295_emotional_design_view');
    append_book('294', 'Qoran', '', '', '294_qoran_view');
    append_book('293', 'The Joy of Game Theory', 'Presh Talwalkar', '', '293_the_joy_of_game_theory_view');
    append_book('292', 'Matchmakers', '', '', '292_matchmakers_view');
    append_book('291', 'Change by Design', '', '', '291_change_by_design_view');
    append_book('289', 'It\'s not how good you are, it\'s how good you want to be', 'Paul Arden', '', '289_its_not_view');
    append_book('288', 'Make Time', 'Jake Knapp', '', '288_make_time_view');
    append_book('287', 'The Laws of Simplicity', 'John Maeda', '', '287_simplicity_view');
    append_book('286', 'How to Win Friends & Influence People', 'Dale Carnegie', '', '286_htwfip_view');
    append_book('285', 'Ho Chi Minh', 'Life and Cause', '', '285_hcm_life_and_cause_view');
    append_book('284', 'Prison Diary', 'Ho Chi Minh', '', '284_prison_diary_view');
    append_book('283', 'Game Theory', '', '', '283_game_theory_view');
    append_book('282', 'Shoe Dog', '', '', '282_shoe_dog_view');
    append_book('281', 'Design as Art', '', '', '281_design_as_art_view');
    append_book('280', 'V zajatí geografie', 'Tim Marshall', '', '280_v_zajati_geografie_view');
    append_book('279', 'The Language of Cities', '', '', '279_cities_view');
    append_book('278', 'Čierny rok', 'Jozef Karika', '', '278_karika_cierny_rok_view');
    append_book('276', 'The Mom Test', '', '', '276_moms_test_view');
    append_book('275', 'Intercom on Starting up', '', '', '275_intercom_view');
    append_book('273', 'Designing Products People Love', '', '', '273_designing_products_view');
    append_book('274', 'Komando 52', 'Peter Tóth', '', '274_komando52_view');
    append_book('268', 'Hooked', 'Nir Eyal', '', '268_hooked_view');
    append_book('251', 'Zelená kniha', 'Kadáfí', '', '251_kaddafi_view');
    append_book('272', 'Color, Space and Style', '', '', '272_css_view');
    append_book('271', 'Validating Product Ideas', '', '', '271_vpi_view');
    append_book('270', 'Farská republika', 'Dominik Tatarka', '', '270_farska_republika_view');
    append_book('269', 'Warhol', '', '', '269_warhol_view');
    append_book('267', 'Typography in magazines', '', '', '267_typography_in_magazines_view');
    append_book('266', 'Tma', 'Jozef Karika', '', '266_karika_tma_view');
    append_book('265', 'Budúcnosť architektúry v 100 budovách', 'Marc Kushner', '', '265_ted_architektura_view');
    append_book('264', 'Trhlina', 'Jozef Karika', '', '264_karika_trhlina_view');
    append_book('263', 'Krycie meno BEŽEC', 'Peter Tóth', '', '263_bezec_view');
    append_book('262', 'Vlastnou hlavou', 'Marek Vagovič', '', '262_vlastnou_hlavou_view');
    append_book('261', 'Sprint', 'Jake Knapp', '', '261_sprint_view');
    append_book('260', 'Temná&nbsp;aréna', 'Mario Puzo', '', '260_puzo_temna_arena_view');
    append_book('259', 'Americký&nbsp;cisár', 'Martin Pollack', '', '259_americky_cisar_view');
    append_book('254', 'Ogilvy on Advertising', '', '', '254_ogilvy_view');
    append_book('258', 'Dobrodružstvá Toma&nbsp;Sawyera', 'Mark Twain', '', '258_twain_tom_sawyer_view');
    append_book('257', 'Typografie', 'Eric Gill', '', '257_gill_typografie_view');
    append_book('256', 'Strach', 'Jozef Karika', '', '256_karika_strach_view');
    append_book('255', 'Poslední orebita', '1843', '', '255_posledni_orebita_view');
    append_book('253', 'Čierna hra', 'Jozef Karika', '', '253_karika_cierna_hra_view');
    append_book('252', 'Dobrodružstvá Marca Pola', '', '', '252_marco_polo_view');
    append_book('250', 'Umenie vojny', 'Sun Ci', '', '250_umenie_vojny_view');
    append_book('249', 'Huckleberry Finch', 'Mark Twain', '', '249_huckleberry_finch_view');
    append_book('248', 'Zväčša neškodná', 'Douglas Adams', '5', '248_stopar5_view');
    append_book('247', 'Zbohom a ďakujeme za ryby', 'Douglas Adams', '4', '247_stopar4_view');
    append_book('246', 'Život, vesmír a všetko', 'Douglas Adams', '3', '246_stopar3_view');
    append_book('245', 'Reštaurácia na konci vesmíru', 'Douglas Adams', '2', '245_stopar2_view');
    append_book('244', 'Stopárov sprievodca galaxiou', 'Douglas Adams', '1', '244_stopar1_view');
    append_book('243', 'Uchopenie moci', 'Guido Knopp', '', '243_uchopenie_moci_view');
    append_book('242', 'Šťastná pútnička', 'Mario Puzo', '', '242_stastna_putnicka_view');
    append_book('241', 'Budhizmus', '', '', '241_budhizmus_view');
    append_book('240', 'Válka s mloky', 'Karel Čapek', '', '240_valka_s_mloky_view');
    append_book('239', 'Zbrane vplyvu', '', '', '239_zbrane_vplyvu_view');
    append_book('238', 'Masarykove prejavy', '', '', '238_masarykove_prejavy_view');
    append_book('237', 'Písně kosmické', 'Jan Neruda', '', '237_pisne_kosmicke_view');
    append_book('236', 'Utrpenie mladého Werthera', 'W. A. Goethe', '', '236_werther_view');
    append_book('235', 'Denník Anny Frankovej', '', '', '235_anna_frankova_view');
    append_book('234', 'Čo Dante nevidel', 'Alfréd Wetzler', '', '234_wetzler_view');
    append_book('233', 'Nero', '', '', '233_nero_view');
    append_book('232', 'Mafia', 'V. P. Borovička', '', '232_vpborovicka_view');
    append_book('231', 'Nový zákon', '', '', '231_novy_zakon_view');
    append_book('230', 'Mafiánsky hrobár', 'Philip Carlo', '', '230_mafiansky_hrobar_view');
    append_book('229', 'Na smrť', 'Jozef Karika', '', '229_karika_na_smrt2_view');
    append_book('227', 'Smrť sa volá Engelchen', 'Ladislav Mňačko', '', '227_engelchen_view');
    append_book('226', 'Jörgen Lykke,', 'posledný rytier Dánsky', '', '226_jorgen_lykke_view');
    append_book('225', 'Gýč alebo umenie', '', '', '225_gyc_alebo_umenie_view');






    $(".block").addClass("js-collapsed");

    $(".js-collapsed").click(function()
    {
      if (!anim_finished) return;
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
        }, 300);
    });
    // intro_anim(); //intro anim off
}


init_books();
