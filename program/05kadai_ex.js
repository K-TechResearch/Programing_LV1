input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onGesture(Gesture.Shake, function () {
    if (input.lightLevel() < 10) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
