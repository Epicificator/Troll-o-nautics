ServerEvents.recipes(event => {
    event.remove({ id: 'create_connected:crafting/kinetics/kinetic_bridge' })
})

RecipeViewerEvents.removeEntries('item', event => {
    event.remove('create_connected:kinetic_bridge')
})