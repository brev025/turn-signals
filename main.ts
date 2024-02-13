let pitch = 0
input.onPinPressed(TouchPin.P0, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
function trigger () {
    if (pitch <= 10 && pitch >= -10) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
}
input.onPinPressed(TouchPin.P2, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    if (input.pinIsPressed(TouchPin.P1) && (pitch < 10 && pitch > -10)) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
