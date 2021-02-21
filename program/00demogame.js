input.onButtonPressed(Button.A, function () {
    score = input.runningTime()
    while (damage < 2) {
        enemy = game.createSprite(randint(0, 4), 0)
        etime = randint(80, 200)
        for (let index = 0; index < 4; index++) {
            basic.pause(etime)
            enemy.change(LedSpriteProperty.Y, 1)
        }
        if (スプライト.isTouching(enemy)) {
            damage += 1
            basic.showIcon(IconNames.No)
        }
        enemy.delete()
    }
    basic.showIcon(IconNames.Sad)
    score = input.runningTime() - score
    score = score / 1000
    while (flag == 0) {
        basic.showNumber(score)
        if (input.buttonIsPressed(Button.B)) {
            flag += 1
        }
    }
    control.reset()
})
let etime = 0
let enemy: game.LedSprite = null
let score = 0
let flag = 0
let damage = 0
let スプライト: game.LedSprite = null
スプライト = game.createSprite(2, 4)
damage = 0
flag = 0
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 15) {
        スプライト.change(LedSpriteProperty.X, 1)
        basic.pause(1500 / input.rotation(Rotation.Roll))
    } else if (input.rotation(Rotation.Roll) < -15) {
        スプライト.change(LedSpriteProperty.X, -1)
        basic.pause(1500 / Math.abs(input.rotation(Rotation.Roll)))
    } else {
    	
    }
})
