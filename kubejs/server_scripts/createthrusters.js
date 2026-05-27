ServerEvents.recipes(event => {
    event.remove({
        id: 'createthrusters:alternator',
        id: 'createthrusters:analogue_contraption_controller',
        id: 'createthrusters:andesite_cable',
        id: 'createthrusters:bidirectional_gearbox',
        id: 'createthrusters:contraption_network_linker',
        id: 'createthrusters:gyroscope_link',
        id: 'createthrusters:industrial_motor',
        id: 'createthrusters:physics_goggles',
        id: 'createthrusters:physics_staff',
        id: 'createthrusters:processing_upgrade_haunting_t1',
        id: 'createthrusters:processing_upgrade_haunting_t2',
        id: 'createthrusters:processing_upgrade_haunting_t3',
        id: 'createthrusters:processing_upgrade_haunting_t4',
        id: 'createthrusters:processing_upgrade_smelting_t1',
        id: 'createthrusters:processing_upgrade_smelting_t2',
        id: 'createthrusters:processing_upgrade_smelting_t3',
        id: 'createthrusters:processing_upgrade_smelting_t4',
        id: 'createthrusters:processing_upgrade_smoking_t1',
        id: 'createthrusters:processing_upgrade_smoking_t2',
        id: 'createthrusters:processing_upgrade_smoking_t3',
        id: 'createthrusters:processing_upgrade_smoking_t4',
        id: 'createthrusters:propulsion_upgrade_t1',
        id: 'createthrusters:propulsion_upgrade_t2',
        id: 'createthrusters:propulsion_upgrade_t3',
        id: 'createthrusters:propulsion_upgrade_t4',
        id: 'createthrusters:rope_knot',
        id: 'createthrusters:thruster',
        id: 'createthrusters:thruster_lense',
        id: 'createthrusters:variable_transmission',
        id: 'createthrusters:vertical_bidirectional_gearbox',
        id: 'createthrusters:vertical_variable_transmission' })
})

RecipeViewerEvents.removeEntries('item', event => {
    event.remove('createthrusters:alternator')
    event.remove('createthrusters:analogue_contraption_controller')
    event.remove('createthrusters:andesite_cable')
    event.remove('createthrusters:bidirectional_gearbox')
    event.remove('createthrusters:contraption_network_linker')
    event.remove('createthrusters:gyroscope_link')
    event.remove('createthrusters:industrial_motor')
    event.remove('createthrusters:physics_goggles')
    event.remove('createthrusters:physics_staff')
    event.remove('createthrusters:processing_upgrade_haunting_t1')
    event.remove('createthrusters:processing_upgrade_haunting_t2')
    event.remove('createthrusters:processing_upgrade_haunting_t3')
    event.remove('createthrusters:processing_upgrade_haunting_t4')
    event.remove('createthrusters:processing_upgrade_smelting_t1')
    event.remove('createthrusters:processing_upgrade_smelting_t2')
    event.remove('createthrusters:processing_upgrade_smelting_t3')
    event.remove('createthrusters:processing_upgrade_smelting_t4')
    event.remove('createthrusters:processing_upgrade_smoking_t1')
    event.remove('createthrusters:processing_upgrade_smoking_t2')
    event.remove('createthrusters:processing_upgrade_smoking_t3')
    event.remove('createthrusters:processing_upgrade_smoking_t4')
    event.remove('createthrusters:propulsion_upgrade_t1')
    event.remove('createthrusters:propulsion_upgrade_t2')
    event.remove('createthrusters:propulsion_upgrade_t3')
    event.remove('createthrusters:propulsion_upgrade_t4')
    event.remove('createthrusters:rope_knot')
    event.remove('createthrusters:thruster')
    event.remove('createthrusters:thruster_lense')
    event.remove('createthrusters:variable_transmission')
    event.remove('createthrusters:vertical_bidirectional_gearbox')
    event.remove('createthrusters:vertical_variable_transmission')
})