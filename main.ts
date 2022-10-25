radio.onReceivedNumber(function (receivedNumber) {
	
})
radio.onReceivedValue(function (name, value) {
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
})
radio.setGroup(27)
basic.forever(function () {
	
})
