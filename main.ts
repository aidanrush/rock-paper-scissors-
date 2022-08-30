input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    Number2 += randint(1, 2)
    if (Number2 == 1) {
        Score += 1
        basic.showNumber(Score)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showString("Nope")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    Number2 += randint(1, 2)
    if (Number2 == 2) {
        Score += 1
        basic.showNumber(Score)
    } else {
        basic.showString("Nope")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    Number2 += randint(1, 2)
    if (Number2 == 1) {
        Score += 1
        basic.showNumber(Score)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showString("Nope")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let Number2 = 0
let Score = 0
Score = 0
basic.forever(function () {
    if (Score == 3) {
        basic.showString("Winner! Winner!")
    }
})
basic.forever(function () {
	
})
