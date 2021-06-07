basic.forever(function () {
    if (input.temperature() < 26) {
        basic.showString("" + (input.temperature()))
        basic.showIcon(IconNames.No)
        music.playTone(262, music.beat(BeatFraction.Breve))
    } else if (input.temperature() > 34) {
        basic.showString("" + (input.temperature()))
        basic.showIcon(IconNames.No)
        music.playTone(523, music.beat(BeatFraction.Breve))
    } else {
        basic.showString("\"t.correcta\"")
        basic.showIcon(IconNames.Yes)
    }
})
