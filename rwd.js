let bgImage = document.getElementById("bg-image");
let bodyThemes = document.getElementById("body").className;

function rwd(screen){
    if (screen.matches) {
        if (bodyThemes === "day") {
            bgImage.src="./img/bg-mobile-light.jpg";
        } else {
            bgImage.src="./img/bg-mobile-dark.jpg";
        }
    } else {
        if (bodyThemes === "day") {
            bgImage.src="./img/bg-desktop-light.jpg";
        } else {
            bgImage.src="./img/bg-desktop-dark.jpg";
        }
    }
}

let screen = window.matchMedia("(max-width : 585px)");
rwd(screen);
screen.addListener(rwd);