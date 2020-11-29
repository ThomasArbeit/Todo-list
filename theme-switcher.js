let switcher = document.getElementById("switcher");
let body = document.getElementById('body');
let switcherText = document.getElementById('textSwitcher');

switcher.addEventListener("click", function(e){
    e.preventDefault();
    let bodyTheme = body.className;
    console.log(bodyTheme);

    if (bodyTheme == "day"){
        body.classList = "night";
        switcherText.textContent = "Thème clair";
        switcher.src = "./img/icon-sun.svg"
    } else {
        body.classList = "day";
        switcherText.textContent = "Thème sombre";
        switcher.src = "./img/icon-moon.svg"
    }
})