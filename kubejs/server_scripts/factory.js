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
    event.remove({ id: 'powergrid:mechanical_crafting/integrated_circuit' })
    event.remove({ id: 'powergrid:sequenced_assembly/electrical_gizmo' })
    const gizmo = 'powergrid:incomplete_electrical_gizmo'
    event.recipes.createSequencedAssembly([
        CreateItem.of('powergrid:electrical_gizmo', 100.0),
        CreateItem.of('createdeco:zinc_sheet', 7.0),
        CreateItem.of('create:polished_rose_quartz', 5.0),
        CreateItem.of('minecraft:gold_nugget', 3.0),
        CreateItem.of('create:copper_nugget"', 2.0),
        CreateItem.of('minecraft:repeater', 3.0),
    ], 'createdeco:zinc_sheet', [
        event.recipes.createDeploying(gizmo, [gizmo, Ingredient.of('#c:copper_coils')]),
        event.recipes.createDeploying(gizmo, [gizmo, 'create:electron_tube']),
        event.recipes.createDeploying(gizmo, [gizmo, 'ccbr:integrated_circuit']),
        event.recipes.createDeploying(gizmo, [gizmo, 'minecraft:gold_nugget']),
    ]).transitionalItem(gizmo).loops(1)

    event.remove({ id: 'glaidens_radio_mod:circuit_board' })
    event.replaceInput({ input: 'glaidens_radio_mod:circuit_board'  }, 'glaidens_radio_mod:circuit_board', 'ccbr:basic_integrated_circuit')


//Blank Disc
    event.stonecutting('2x kubejs:blank_disc', 'tfmg:plastic_sheet')
})

RecipeViewerEvents.removeEntries('item', event => {
    event.remove('powergrid:integrated_circuit')
    event.remove('glaidens_radio_mod:circuit_board')
})

ServerEvents.tags('item', event => {
    event.add('c:music_discs', 'kubejs:blank_disc')
    event.add('c:music_discs', 'betteracheology:music_disc_swings')
    event.add('c:music_discs', 'furniture:cphs_pride')
    event.add('c:music_discs', 'furniture:letsdo_theme')
    event.remove('c:plates/zinc', 'powergrid:zinc_sheet')
})