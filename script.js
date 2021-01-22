$(".bergamaImg").hover(function() {
    $(this).css("opacity", "0.4");
}, function() {
    $(this).css("opacity", "1");
}
);

$(".galeriImg").hover(function() {
    $(this).css("opacity", "0.4");
}, function() {
    $(this).css("opacity", "1");
}
);

$(".nGidilir").hover(function() {
    $(this).css("opacity", "0.4");
}, function() {
    $(this).css("opacity", "1");
}
);

$("img").click(function() {
    url = this.src;
    clsBtn = document.getElementById('fancyBtn');
    fancy = document.getElementById('fancy');
    fancyBox = document.getElementById('fancyImg');
    fancy.style.display = "block";
    fancyBox.src = url;
    fancyBox.alt = url;
    $(this).css("opacity", "1");
    $("#fancyBtn").click(function(){
        fancy.style.display = "none";
    });
});