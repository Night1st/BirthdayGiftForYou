window.onload = function() {
    var merrywrap = document.getElementById('merrywrap')
    var gift = merrywrap.getElementsByClassName('gift')[0]
    var box = gift.getElementsByClassName('box')[0]
    var banner = merrywrap.getElementsByClassName('banner')[0]

    var step = 1
    var stepMinutes = [2000, 5000, 1000, 1000]
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
            origin: { y: 0.87 }
        })
    }
    function openGift () {
        if (step == 1) {
            gift.removeEventListener("click", openGift, false)
        }
        stepClass(step)
        if (step == 2) {
            fireConfetti()
            banner.classList.add('banner-come')
        }
        if (step == 3) {
            fireConfetti()
            return
        }
        setTimeout(openGift, stepMinutes[step-1])
        step++
    }

    init()

}