StartupEvents.registry('item', event => {
    event.create('blank_disc')
})

ItemEvents.modification(event => {
    event.modify('minecraft:charcoal', item => {
        item.burnTime = 800
    })
})
