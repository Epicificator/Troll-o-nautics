ServerEvents.recipes(event => {
    event.remove({ id: 'createpropulsion:crafting/liquid_burner' })
    event.remove({ id: 'createpropulsion:crafting/solid_burner' })
    event.remove({ id: 'createpropulsion:crafting/stirling_engine' })
    event.shaped( 'createpropulsion:solid_burner',
                [ '   ', 'aba', 'cdc' ],
                { a: 'tfmg:cast_iron_sheet', b: 'tfmg:cast_iron_ingot', c: 'create:iron_sheet', d: 'minecraft:blast_furnace'})
})

RecipeViewerEvents.removeEntries('item', event => {
    event.remove('createpropulsion:liquid_burner')
    event.remove('createpropulsion:stirling_engine')
})