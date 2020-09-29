let GPA = 0
input.onGesture(Gesture.Shake, function () {
    GPA = randint(80, 100)
    basic.showNumber(GPA)
    if (GPA <= 84) {
        basic.showString("A-")
    } else if (GPA <= 89) {
        basic.showString("A")
    } else if (GPA <= 100) {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
