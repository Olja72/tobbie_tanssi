basic.showString("HELLO, ELIAS!")
TobbieII.shake_head(10)
basic.pause(500)
TobbieII.forward()
basic.pause(500)
TobbieII.backward()
basic.pause(500)
TobbieII.leftward()
basic.pause(500)
TobbieII.rightward()
basic.pause(500)
TobbieII.shake_head(10)
basic.pause(500)
TobbieII.stopwalk()
basic.showIcon(IconNames.Heart)
basic.showString("HELLO, ELIAS!")
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (TobbieII.RBlock(300)) {
        TobbieII.leftward()
    } else if (TobbieII.LBlock(300)) {
        TobbieII.rightward()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    } else {
        TobbieII.forward()
    }
})
