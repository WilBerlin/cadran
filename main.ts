function DisplayHH (hh: number) {
    led.plotBrightness(parseFloat(HH_X[hh]), parseFloat(HH_Y[hh]), 255)
}
function DisplayMM (mm: number) {
    a = Math.floor(mm / 5)
    if (a == 12) {
        a = 0
        led.plotBrightness(parseFloat(MM_X[a]), parseFloat(MM_Y[a]), 25)
    }
}
let i = 0
let a = 0
let HH_Y: string[] = []
let HH_X: string[] = []
let MM_Y: string[] = []
let MM_X: string[] = []
MM_X = "244444200000".split("")
MM_Y = "001234443210".split("")
HH_X = "233333211111".split("")
HH_Y = "101234343210".split("")
basic.forever(function () {
    i = 0
    for (let index = 0; index < 12; index++) {
        DisplayHH(1)
        basic.pause(500)
        i += 1
        basic.clearScreen()
    }
})
