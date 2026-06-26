StartupEvents.registry('item', event => {
    event.create('blank_disc')
})

ItemEvents.modification(event => {
    event.modify('minecraft:charcoal', item => {
        item.burnTime = 1200
    })
    event.modify('spelunkery:charcoal_lump', item => {
        item.burnTime = 150
    })
})
