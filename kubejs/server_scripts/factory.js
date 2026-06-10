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
    event.stonecutting('2x kubejs:blank_disc', 'tfmg:plastic_sheet')
})

ServerEvents.tags('item', event => {
    event.add('c:music_discs', 'kubejs:blank_disc')
})