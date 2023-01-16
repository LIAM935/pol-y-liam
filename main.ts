function derecha () {
	
}
function adelante () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 100)
}
function parar () {
	
}
function atras () {
	
}
function izquierda () {
	
}
basic.forever(function () {
    adelante()
    atras()
    izquierda()
    derecha()
    parar()
})
