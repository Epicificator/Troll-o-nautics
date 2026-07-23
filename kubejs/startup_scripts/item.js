StartupEvents.registry('item', event => {
    event.create('blank_disc')
    event.create('ion_engine')
    event.create('incomplete_ion_engine', 'create:sequenced_assembly')
    event.create('lignite_nodule', 'create:sequenced_assembly')
})

ItemEvents.modification(event => {
    event.modify('minecraft:charcoal', item => {
        item.burnTime = 1200
    })
    event.modify('spelunkery:charcoal_lump', item => {
        item.burnTime = 150
    })
})
