radio.onReceivedNumber(function (receivedNumber) {
    count += receivedNumber
    if (receivedNumber == 0) {
        init()
    }
})
input.onButtonPressed(Button.A, function () {
    if (flagA == 0) {
        radio.sendNumber(1)
        flagA += 1
        count += 1
    }
})
function init () {
    radio.setGroup(1)
    flagA = 0
    count = 0
    MyNo = 0
    random = randint(0, 4)
}
input.onButtonPressed(Button.AB, function () {
    init()
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("name", random)
})
radio.onReceivedValue(function (name, value) {
    if (MyNo == value) {
        basic.showIcon(IconNames.Happy)
        music.playTone(262, music.beat(BeatFraction.Double))
    }
})
let random = 0
let MyNo = 0
let flagA = 0
let count = 0
init()
basic.forever(function () {
    basic.showNumber(count)
})
