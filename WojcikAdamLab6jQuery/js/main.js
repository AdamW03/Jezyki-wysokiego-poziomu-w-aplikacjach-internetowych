// ZADANIE 1. Podstawy jQuery
$(document).ready(function(){
    $('span.pq').each(function(){
        const quote=$(this).clone();
        quote.removeClass('pq');
        quote.addClass('pullquote');
        $(this).before(quote);
    })  // koniec finkcji each
}); // koniec funkcji ready
