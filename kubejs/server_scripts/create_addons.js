ServerEvents.recipes(event => {
    //createcasing
    event.remove({ id: 'createcasing:crafting/configurable_gearbox/andesite' })
    event.remove({ id: 'createcasing:crafting/configurable_gearbox/brass' })
    event.remove({ id: 'createcasing:crafting/configurable_gearbox/copper' })
    event.remove({ id: 'createcasing:crafting/configurable_gearbox/creative' })
    event.remove({ id: 'createcasing:crafting/configurable_gearbox/industrial_iron' })
    event.remove({ id: 'createcasing:crafting/configurable_gearbox/railway' })
    event.remove({ id: 'createcasing:crafting/configurable_gearbox/refined_radiance' })
    event.remove({ id: 'createcasing:crafting/configurable_gearbox/shadow_steel' })
    event.remove({ id: 'createcasing:crafting/configurable_gearbox/weathered_iron' })
    event.remove({ id: 'createcasing:crafting/depot/brass' })
    event.remove({ id: 'createcasing:crafting/fluid_pipe/brass_vertical' })
    //createdieselgenerators
    event.remove({ id: 'createdieselgenerators:crafting/andesite_girder' })
    //createpropulsion
    event.remove({ id: 'createpropulsion:crafting/liquid_burner' })
    event.remove({ id: 'createpropulsion:crafting/solid_burner' })
    event.remove({ id: 'createpropulsion:crafting/stirling_engine' })
    event.shaped( 'createpropulsion:solid_burner',
                  [ '   ', 'aba', 'cdc' ],
                  { a: 'tfmg:cast_iron_sheet', b: 'tfmg:cast_iron_ingot', c: 'create:iron_sheet', d: 'minecraft:blast_furnace'})
    event.remove({ output: 'createpropulsion:platinum_casing' })
    event.remove({ id: 'createpropulsion:crafting/platinum_fluid_tank' })
    event.remove({ id: 'createpropulsion:crafting/cable' })
    event.remove({ id: 'createpropulsion:crafting/cable_relay' })
    event.remove({ id: 'createpropulsion:mixing/coral' })
    event.remove({ id: 'createpropulsion:crafting/coral_generator' })
    //lift n load
    event.remove({ id: 'create_lnl:thruster' })
    //petrolsparts
    event.remove({ id: 'petrolsparts:crafting/pneumatic_tube' })
    event.remove({ id: 'petrolsparts:mechanical_crafting/hydraulic_transmission' })
    //simulatedrubies
    event.remove({ id: 'simulatedrubies:chunk_loader' })
    //tfmg
    event.remove({ id: 'tfmg:crafting/materials/brass_pipe' })
    event.remove({ id: 'tfmg:crafting/materials/brass_pipe_vertical' })
    event.remove({ id: 'tfmg:crafting/materials/brass_smart_fluid_pipe' })
    event.remove({ id: 'tfmg:crafting/materials/brass_fluid_valve' })
    event.remove({ id: 'tfmg:crafting/materials/brass_mechanical_pump' })
})

RecipeViewerEvents.removeEntries('item', event => {
    //createcasing
    event.remove('createcasing:andesite_configurable_gearbox')
    event.remove('createcasing:brass_configurable_gearbox')
    event.remove('createcasing:copper_configurable_gearbox')
    event.remove('createcasing:creative_configurable_gearbox')
    event.remove('createcasing:industrial_iron_configurable_gearbox')
    event.remove('createcasing:railway_configurable_gearbox')
    event.remove('createcasing:refined_radiance_configurable_gearbox')
    event.remove('createcasing:shadow_steel_configurable_gearbox')
    event.remove('createcasing:weathered_iron_configurable_gearbox')
    event.remove('createcasing:brass_depot')
    //createdieselgenerators
    event.remove('createdieselgenerators:andesite_girder')
    //createpropulsion
    event.remove('createpropulsion:liquid_burner')
    event.remove('createpropulsion:stirling_engine')
    event.remove('createpropulsion:platinum_casing')
    event.remove('createpropulsion:platinum_fluid_tank')
    event.remove('createpropulsion:cable')
    event.remove('createpropulsion:cable_relay')
    event.remove('createpropulsion:coral_generator')
    //lift n load
    event.remove('create_lnl:thruster')
    //petrolsparts
    event.remove('petrolsparts:pneumatic_tube')
    event.remove('petrolsparts:hydraulic_transmission')
    //simulatedrubies
    event.remove('simulatedrubies:chunk_loader')
    //tfmg
    event.remove('tfmg:brass_pipe')
    event.remove('tfmg:brass_smart_fluid_pipe')
    event.remove('tfmg:brass_fluid_valve')
    event.remove('tfmg:brass_mechanical_pump')
})
