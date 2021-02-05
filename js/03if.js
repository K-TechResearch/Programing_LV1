input.onButtonPressed(Button.A, function () {
    if (input.isGesture(Gesture.LogoUp)) {
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                . # . # .
                # . # . #
                # . . . #
                . # . # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})