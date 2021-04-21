var btn = $(".drum");
var musProp = {
    img: ["url(images/tom1.png)", "url(images/tom2.png)", "url(images/tom3.png)", "url(images/tom4.png)", "url(images/snare.png)", "url(images/crash.png)", "url(images/kick.png)"],
    snd: ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"],
    winSound: []
};

$(".drum").each(function(index, item){
    $(this).css("backgroundImage", musProp.img[index]);
    musProp.winSound[index] = new Audio(musProp.snd[index]);
    $(this).on("click", function(){btnClicked($(this).text());});
  });

$(document).keypress(function(event) {
    btnClicked(event.key);
});

function btnClicked(input) {
    if (input == "w") {
        makeSound(0);
    } else if (input == "a")  {
        makeSound(1);
    } else if (input == "s") {
        makeSound(2);
    } else if (input == "d") {
        makeSound(3);
    } else if (input == "j") {
        makeSound(4);
    } else if (input == "k") {
        makeSound(5);
    } else if (input == "l") {
        makeSound(6);
    } 
};

function playSound(m) {
    s = musProp.winSound[m];
    s.play();
    s.currentTime = 0;
};
function makeSound(x){
    playSound(x);
    btn.eq(x).addClass("pressed");
    setTimeout(function(){btn.eq(x).removeClass("pressed")}, 100);
}
