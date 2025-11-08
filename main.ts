function right (speed: number, time: number) {
    powerbrick.MotorRunDual(speed * m1 / 100, speed * m2 / 100 * 0.4)
    if (time == 0) {
        return
    } else {
        basic.pause(time * timefix)
        stop()
    }
}
function rotarhtright (speed: number, time: number) {
    powerbrick.MotorRunDual(speed * m1 / 100, speed * m2 / -100)
    if (time == 0) {
        return
    } else {
        basic.pause(time * timefix)
        stop()
    }
}
function 右外黑 () {
    if (powerbrick.Tracer(powerbrick.Ports.PORT3, powerbrick.Slots.A)) {
        w = 1
        return 1
    }
    w = -1
    return 0
}
function 循線左 (speed: number, time: number, stop_count: number) {
    count = 0
    右外 = 左外黑()
    右外上次 = 右外
    breakflag = 1
    while (breakflag == 1) {
        if (左內黑() == 0 && 右內黑() == 0) {
            front(speed, 0)
        } else if (左內黑() == 1 && 右內黑() == 0) {
            left(speed, 0)
        } else if (左內黑() == 0 && 右內黑() == 1) {
            right(speed, 0)
        } else if (左內黑() == 1 && 右內黑() == 1) {
        	
        }
        右外 = 左外黑()
        if (右外上次 == 0 && 右外 == 1) {
            count = count + 1
        }
        右外上次 = 右外
        if (count >= stop_count) {
            breakflag = 0
            stop()
        }
    }
}
function 左內黑 () {
    if (powerbrick.Tracer(powerbrick.Ports.PORT2, powerbrick.Slots.B)) {
        w = 1
        return 1
    }
    w = -1
    return 0
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
    powerbrick.MotorRunDual(speed * m1 / 100 * 0.4, speed * m2 / 100)
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
    循線左(100, 0, 1)
    rotaghtleft(80, 750)
    front(100, 2800)
    rotaghtleft(80, 700)
    front(100, 1000)
})
function 右內黑 () {
    if (powerbrick.Tracer(powerbrick.Ports.PORT3, powerbrick.Slots.B)) {
        w = 1
        return 1
    }
    w = -1
    return 0
}
function 循線 (speed: number, time: number) {
    breakflag = 1
    while (breakflag == 1) {
        if (左內黑() == 0 && 右內黑() == 0) {
            front(speed, 0)
        } else if (左內黑() == 1 && 右內黑() == 0) {
            left(speed, 0)
        } else if (左內黑() == 0 && 右內黑() == 1) {
            right(speed, 0)
        } else if (左內黑() == 1 && 左外黑() == 1) {
        	
        }
    }
}
function 左外黑 () {
    if (powerbrick.Tracer(powerbrick.Ports.PORT2, powerbrick.Slots.A)) {
        w = 1
        return 1
    }
    w = -1
    return 0
}
function 循線右 (speed: number, time: number, stop_count: number) {
    count = 0
    右外 = 右外黑()
    右外上次 = 右外
    breakflag = 1
    while (breakflag == 1) {
        if (左內黑() == 0 && 右內黑() == 0) {
            front(speed, 0)
        } else if (左內黑() == 1 && 右內黑() == 0) {
            left(speed, 0)
        } else if (左內黑() == 0 && 右內黑() == 1) {
            right(speed, 0)
        } else if (左內黑() == 1 && 右內黑() == 1) {
        	
        }
        右外 = 右外黑()
        if (右外上次 == 0 && 右外 == 1) {
            count = count + 1
        }
        右外上次 = 右外
        if (count >= stop_count) {
            breakflag = 0
            stop()
        }
    }
}
function rotaghtleft (speed: number, time: number) {
    basic.showIcon(IconNames.Meh)
    powerbrick.MotorRunDual(speed * m1 / -100, speed * m2 / 100)
    if (time == 0) {
        return
    } else {
        basic.pause(time * timefix)
        stop()
    }
}
let breakflag = 0
let 右外上次 = 0
let 右外 = 0
let count = 0
let w = 0
let timefix = 0
let m2 = 0
let m1 = 0
basic.showIcon(IconNames.Heart)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
let color = 0
m1 = -255
m2 = -220
let power = 4.2
timefix = Math.map(power, 3.8, 4.2, 1.14, 0.9)
basic.forever(function () {
	
})
