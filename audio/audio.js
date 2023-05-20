document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    var gif = document.getElementById("gif");

    var gifs = [
        "1.gif",
        "2.gif",
        "3.gif",
        "4.gif",
        "5.gif",
        "6.gif",
        "7.gif",
        "8.gif",
        "9.gif",
        "10.gif",
        "11.gif",
        "12.gif",
    ];

    var gifIndex = 0;

    gif.addEventListener("click", function() {
        gifIndex = (gifIndex + 1) % gifs.length;
        gif.src = "gif/" + gifs[gifIndex];

        audio.currentTime = 0.1;
        audio.play();
    });
});
