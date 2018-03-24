var bgColor = ['#ffff80', '#66ff99', '#0099cc', '#ff0066', '#ff9f80', '#99ccff', '#d9ffb3', '#660066'];
var quote;
$(document).ready(function() {
    randomQuote();
});

$('#getRandomQuote').on("click", function(e) {
    e.preventDefault;
    randomQuote();
});
$('#tweetQuote').on("click", function(e) {
    e.preventDefault;
    $('a').attr('href', 'https://twitter.com/intent/tweet?text='+quote);
});
function randomColor() {
    var len = bgColor.length;
    var i = Math.floor(Math.random()*(len-1));
    return bgColor[i];
}
function randomQuote() {
    $.ajax({
        url: 'https://quote-api.glitch.me/pull/1',
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        success: function(res) {
            var color = randomColor();
            quote = res[0].body;
            $('.quoteContainer').css('background-color', color);
            $('button').css('background-color', color);
            $('hr').css('color', color);
            $('#quoteContent').text(res[0].body);
            $('#quoteAuthor').text('-'+res[0].author);
        },
        error: function(res) {
            alert("Failed to load api. Please refresh the page!");
        }
    });
  }