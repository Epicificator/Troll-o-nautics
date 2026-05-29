ItemEvents.modifyTooltips(event => {
    event.modify('minecraft:redstone', tooltip => {
        tooltip.removeLine(1)
    })
})