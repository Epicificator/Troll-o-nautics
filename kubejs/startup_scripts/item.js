StartupEvents.registry('item', event => {
    event.create('kubejs:blank_disc')
    event.create('kubejs:ion_engine')
    event.create('kubejs:incomplete_ion_engine', 'create:sequenced_assembly')
    event.create('kubejs:lignite_nodule', 'create:sequenced_assembly')
    event.create('kubejs:raw_aluminum_nugget')
    event.create('kubejs:lead_dust')
    event.create('kubejs:ochrum_node')
    event.create('kubejs:ochrum_nodule', 'create:sequenced_assembly')
    event.create('kubejs:asurine_node')
    event.create('kubejs:asurine_nodule', 'create:sequenced_assembly')
    event.create('kubejs:crimsite_node')
    event.create('kubejs:crimsite_nodule', 'create:sequenced_assembly')
    event.create('kubejs:veridium_node')
    event.create('kubejs:veridium_nodule', 'create:sequenced_assembly')
    event.create('kubejs:bauxite_node')
    event.create('kubejs:bauxite_nodule', 'create:sequenced_assembly')
    event.create('kubejs:galena_node')
    event.create('kubejs:galena_nodule', 'create:sequenced_assembly')
})

ItemEvents.modification(event => {
    event.modify('minecraft:charcoal', item => {
        item.burnTime = 1200
    })
    event.modify('spelunkery:charcoal_lump', item => {
        item.burnTime = 150
    })
})
