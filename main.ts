radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(168)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.Heart)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        basic.showIcon(IconNames.Happy)
    }
})
