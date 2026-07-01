ServerEvents.recipes(event => {
    //aeronautics_utility_objects
    event.remove({ id: 'aeronautics_utility_objects:brass_universal_joint' })
    event.remove({ id: 'aeronautics_utility_objects:universal_joint_rod' })
    event.remove({ id: 'aeronautics_utility_objects:universal_joint_rod2' })
    event.remove({ id: 'aeronautics_utility_objects:damping_stress_bearing' })
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
    //sim_copycats
    event.remove({ id: 'sim_copycats:levitite_copycat' })
    event.remove({ input: 'sim_copycats:levitite_copycat' })
    event.remove({ id: 'sim_copycats:absurdly_heavy_copycat' })
    event.remove({ input: 'sim_copycats:absurdly_heavy_copycat' })
    event.remove({ id: 'sim_copycats:weightless_copycat' })
    event.recipes.create.mixing('sim_copycats:weightless_copycat', ['create:zinc_ingot', 'minecraft:phantom_membrane'])
})

RecipeViewerEvents.removeEntries('item', event => {
    //aeronautics_utility_objects
    event.remove('aeronautics_utility_objects:brass_universal_joint')
    event.remove('aeronautics_utility_objects:universal_joint_rod')
    event.remove('aeronautics_utility_objects:universal_joint_rod2')
    event.remove('aeronautics_utility_objects:damping_stress_bearing')
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
    //sim_copycats
    event.remove('sim_copycats:levitite_copycat')
    event.remove('sim_copycats:levitite_copycat_slab')
    event.remove('sim_copycats:levitite_copycat_stairs')
})
