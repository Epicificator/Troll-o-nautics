ServerEvents.tags('item', event => {
    event.remove('c:plates/andesite_alloy', 'createcasing:andesite_sheet')
    event.remove('c:plates/zinc', 'createcasing:zinc_sheet')
    event.remove('c:wires/copper', 'tfmg:copper_wire')
})
ServerEvents.recipes(event => {
    //Oxidizer
    event.remove({ id: 'createpropulsion:mixing/oxidizer' })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "heat_requirement": "superheated",
        "ingredients": [
            { "type": "neoforge:single", "amount": 100, "fluid": "tfmg:air" },
            { "item": "createmetallurgy:iron_dust" },
            { "item": "createmetallurgy:iron_dust" },
            { "item": "createmetallurgy:iron_dust" },
            { "item": "minecraft:nether_wart" }
        ],
        "machines": [
            "tfmg:electrode",
            "tfmg:centrifuge",
            "tfmg:electrode"
        ],
        "min_size": 9,
        "processing_time": 20,
        "results": [{ "amount": 100, "id": "createpropulsion:oxidizer" }]
    })
    //Circuts
    // event.remove({ id: 'powergrid:mechanical_crafting/integrated_circuit' })
    // event.remove({ id: 'powergrid:sequenced_assembly/electrical_gizmo' })
    // const gizmo = 'powergrid:incomplete_electrical_gizmo'
    // event.recipes.createSequencedAssembly([
    //     CreateItem.of('powergrid:electrical_gizmo', 100.0),
    //     CreateItem.of('createdeco:zinc_sheet', 7.0),
    //     CreateItem.of('create:polished_rose_quartz', 5.0),
    //     CreateItem.of('minecraft:gold_nugget', 3.0),
    //     CreateItem.of('create:copper_nugget"', 2.0),
    //     CreateItem.of('minecraft:repeater', 3.0),
    // ], 'createdeco:zinc_sheet', [
    //     event.recipes.createDeploying(gizmo, [gizmo, Ingredient.of('#c:copper_coils')]),
    //     event.recipes.createDeploying(gizmo, [gizmo, 'create:electron_tube']),
    //     event.recipes.createDeploying(gizmo, [gizmo, 'ccbr:integrated_circuit']),
    //     event.recipes.createDeploying(gizmo, [gizmo, 'minecraft:gold_nugget']),
    // ]).transitionalItem(gizmo).loops(1)
    event.remove({ id: 'glaidens_radio_mod:circuit_board' })
    event.replaceInput({ input: 'glaidens_radio_mod:circuit_board'  }, 'glaidens_radio_mod:circuit_board', 'ccbr:basic_integrated_circuit')
    //Ion engine
    event.remove({ id: 'createpropulsion:crafting/ion_thruster' })
    const ion_part = 'kubejs:incomplete_ion_engine'
    event.recipes.createSequencedAssembly([
        'kubejs:ion_engine'
    ], 'create:precision_mechanism', [
        event.recipes.createDeploying(ion_part, [ion_part, 'tfmg:screwdriver']),
        event.recipes.createDeploying(ion_part, [ion_part, 'electroenergetics:copper_wire']),
        event.recipes.createFilling(ion_part, [ion_part, Fluid.of('createmetallurgy:molten_silver', 90)]),
        event.recipes.createDeploying(ion_part, [ion_part, 'createpropulsion:platinum_sheet']),
        event.recipes.createPressing(ion_part, ion_part)
    ]).transitionalItem(ion_part).loops(4)
    event.shaped(Item.of('createpropulsion:ion_thruster', 1),
                 [ 'ABC','DED', 'DFD' ],
                 { A: 'simulated:redstone_accumulator', B: 'tfmg:brass_cable_hub', C: 'simulated:redstone_inductor', D: 'create:sturdy_sheet', E: 'createpropulsion:thruster', F: 'kubejs:ion_engine' })

    //Intermediates
    event.remove({ id: 'tfmg:copper_wire_from_ingots_copper_stonecutting' })
    event.remove({ id: 'createcasing:pressing/andesite_alloy' })
    //createbb (broken bad)
    event.remove({ id: 'createbb:copper_zinc_catalyst' })
    event.shapeless('createbb:copper_zinc_catalyst', [ '2x #c:dusts/zinc', '2x #c:dusts/copper' ])
    //limesand
    event.remove({ id: 'create:crushing/limestone' })
    event.recipes.create.sandpaper_polishing('tfmg:limesand', 'create:limestone')
})
RecipeViewerEvents.removeEntries('item', event => {
    // event.remove('powergrid:integrated_circuit')
    event.remove('glaidens_radio_mod:circuit_board')
    event.remove('tfmg:copper_wire')
    event.remove('createcasing:andesite_sheet')
    event.remove('createcasing:zinc_sheet')
    event.remove('kubejs:incomplete_ion_engine')
})
