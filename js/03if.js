input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() > 100) {
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.Heart)
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
