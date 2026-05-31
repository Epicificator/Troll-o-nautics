ItemEvents.modifyTooltips(event => {
    event.modify('minecraft:redstone', tooltip => {
        tooltip.removeLine(1)
    })
    // Insert a nice "hold Shift" hint at line #1
    event.modify("tfmg:steel_distillation_controller", { shift: false }, text => {
        text.insert(2, Text.join([
            Text.darkGray("Hold ["),
            Text.gray("Shift"),
            Text.darkGray("] for "),
            Text.red("Warning")
        ]))
    })
    event.modify("tfmg:steel_distillation_controller", { shift: true }, text => {
        text.add([
            Text.red("DO NOT break steel tanks in an assembled distillation tower while wearing goggles, this will CRASH YOUR GAME!")
        ])
    })
})