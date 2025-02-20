function redtogreen () {
    if (traffic_light == 1) {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
        basic.pause(500)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
        traffic_light = 2
    }
}
input.onButtonPressed(Button.A, function () {
    variabel_2 = 1
})
function green_to_red () {
    if (traffic_light == 2) {
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
        basic.pause(500)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
        traffic_light = 1
    }
}
input.onButtonPressed(Button.B, function () {
    variabel_2 = 1
})
let variabel_2 = 0
let traffic_light = 0
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
traffic_light = 1
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    . # . # .
    `)
basic.forever(function () {
    if (variabel_2 == 1) {
        basic.pause(5000)
        traffic_light = 2
        green_to_red()
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # . .
            . . # # #
            . # . . .
            `)
        basic.pause(10000)
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . # . .
                . . # # .
                . . # . .
                . . # # #
                . # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.pause(1000)
        traffic_light = 1
        redtogreen()
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
        variabel_2 = 0
    }
})
