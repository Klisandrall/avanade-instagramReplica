window.onload = function() {
    let screenshotContainer = document.getElementById("screenshotContainer");

    setInterval(changeScreenshot, 5000, screenshotContainer);
}

function changeScreenshot(div) {
    let screenshots = div.getElementsByClassName("screenshot");
    let currentSs = div.getElementsByClassName("currentSs")[0];
    let currentIndex;

    for (let i = 0; i < screenshots.length; i++) {
        if (screenshots[i] == currentSs) {
            currentIndex = i;
        }
    }

    currentSs.classList.toggle("currentSs");

    //se for o ultimo item da lista
    if (currentIndex == screenshots.length - 1) 
        screenshots[0].classList.toggle("currentSs");
    else
        screenshots[currentIndex+1].classList.toggle("currentSs");

    
}