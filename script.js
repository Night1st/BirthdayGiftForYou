const balloonContainer = document.getElementById("balloon-container")

const pinkShades = [
    '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093', '#C71585', '#FF66CC', '#FF33CC', '#FF00FF',
    '#FF99CC', '#FF66FF', '#FF00CC', '#FF3399', '#FF0099', '#FF66B2', '#FF33B5', '#FF33FF', '#FF00B2',
    '#FF0066', '#FF3366', '#FF6699', '#FF3399', '#FF99FF', '#FF66B2', '#FF6699', '#FF0099', '#FF3366',
    '#FF66B2', '#FF3399', '#FF99CC', '#FF66CC', '#FF33CC', '#FF00FF', '#FF99FF', '#FF66FF', '#FF33FF',
    '#FF00CC', '#FF00B2', '#FF00A2', '#FF0066', '#FF3399', '#FF66B2', '#FF6699', '#FF99CC', '#FF99B2',
    '#FF99A2', '#FF9966', '#FF9933', '#FF9900', '#FFCCCB', '#FFB5C5', '#FF7A8A', '#FF497D', '#FF748C',
    '#FF457D', '#FF2E7A', '#FF5099', '#FF578C', '#FF789C', '#FF6E99', '#FF6BA2', '#FF87B2', '#FF99B5',
    '#FFB5B2', '#FF6E99', '#FF8EA2', '#FFAAAA', '#FFB5C7', '#FF7A91', '#FF497D', '#FF748C', '#FF457D',
    '#FF2E8A', '#FF5099', '#FF578C', '#FF789C', '#FF6E99', '#FF6BA2', '#FF87B2', '#FF99B5', '#FFB5B2',
    '#FFB5A2', '#FFAAAA', '#FFCCCC', '#FFB5D2', '#FF7A95', '#FF497D', '#FF748C', '#FF457D', '#FF2E95',
    '#FF5099', '#FF578C', '#FF789C', '#FF6E99', '#FF6BA2', '#FF87B2', '#FF99B5', '#FFB5B2', '#FF99B2',
    '#FFB5A2', '#FFCCCC', '#FFB5D9', '#FF7A98', '#FF497D', '#FF748C', '#FF457D', '#FF2E98', '#FF5099',
    '#FF578C', '#FF789C', '#FF6E99', '#FF6BA2', '#FF87B2', '#FF99B5', '#FFB5B2', '#FF99B2', '#FFB5A2',
    '#FFCCCC', '#FFB5DF', '#FF7A9B', '#FF497D', '#FF748C', '#FF457D', '#FF2E9B', '#FF5099', '#FF578C',
    '#FF789C', '#FF6E99', '#FF6BA2', '#FF87B2', '#FF99B5', '#FFB5B2', '#FF99B2', '#FFB5A2', '#FFCCCC'
];

function randomColor() {
    return pinkShades[Math.floor(Math.random() * pinkShades.length)]
}

function random(number) {
    return Math.floor(Math.random() * number);
}

function getRandomStyle() {
    var colorCode = randomColor()
    var mt = random(200)
    var ml = random(50)
    var dur = random(5) + 5;
    return `
    background-color: ${colorCode};
    color: ${colorCode};
    box-shadow: inset -7px -3px 10px ${colorCode};
    margin: ${mt}px 0 0 ${ml}px;
    animation: Float ${dur}s ease-in infinite;
    `
}

window.onload = function() {
    var merrywrap = document.getElementById('merrywrap')
    var gift = merrywrap.getElementsByClassName('gift')[0]
    var box = gift.getElementsByClassName('box')[0]
    var banner = merrywrap.getElementsByClassName('banner')[0]

    var step = 1
    var stepMinutes = [2000, 5000, 5000, 5000]
    function init(){
        gift.addEventListener("click", openGift ,false);
    }
    function stepClass (step) {
        merrywrap.className = "merrywrap"
        merrywrap.className = "merrywrap step-" + step
    }
    function fireConfetti() {
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.8 }
        })
    }

    function createBalloons(num) {
        for (var i = num; i > 0; i--) {
          var balloon = document.createElement("div");
          balloon.className = "balloon";
          balloon.style.cssText = getRandomStyle();
          balloonContainer.append(balloon);
        }
    }

    function openGift () {
        if (step == 1) {
            gift.removeEventListener("click", openGift, false)
            box.classList.add("stopped")
        }
        stepClass(step)
        if (step == 2) {
            fireConfetti()
            banner.classList.add('banner-come')
        }
        if (step == 3) {
            fireConfetti()
            createBalloons(30)
        }
        if (step == 4) {
            fireConfetti()
            return
        }
        setTimeout(openGift, stepMinutes[step-1])
        step++
    }

    init()

}
