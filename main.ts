input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Heart)
    }
    basic.showString("Life is a Garden...")
    basic.showLeds(`
        . . # . .
        . # . # .
        . . # . .
        . . # # .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Friendships are the frogs")
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # # .
            . . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . # # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # . . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . # . . .
            `)
    }
})
