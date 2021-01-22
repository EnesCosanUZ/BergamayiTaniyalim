$("img").click(function() {
    url = this.src;
    clsBtn = document.getElementById('fancyBtn');
    fancy = document.getElementById('fancy');
    fancyBox = document.getElementById('fancyImg');
    fancy.style.display = "block";
    fancyBox.src = url;
    fancyBox.alt = url;
    $("#fancyBtn").click(function(){
        fancy.style.display = "none";
    });
});