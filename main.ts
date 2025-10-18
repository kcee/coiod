function right (speed: number, time: number) {
    powerbrick.MotorRunDual(speed * m1 / 100, 0)
    if (time == 0) {
        return
    } else {
        basic.pause(time * timefix)
        stop()
    }
}
function front (speed: number, time: number) {
    powerbrick.MotorRunDual(speed * m1 / 100, speed * m2 / 100)
    if (time == 0) {
        return
    } else {
        basic.pause(time * timefix)
        stop()
    }
}
function left (speed: number, time: number) {
    powerbrick.MotorRunDual(0, speed * m2 / 100)
    if (time == 0) {
        return
    } else {
        basic.pause(time * timefix)
        stop()
    }
}
function stop () {
    powerbrick.MotorRunDual(0, 0)
}
input.onButtonPressed(Button.A, function () {
    left(100, 1000)
})
let timefix = 0
let m2 = 0
let m1 = 0
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
let color = 0
m1 = -255
m2 = -220
let power = 4
timefix = Math.map(power, 3.8, 4.2, 1.14, 1)
