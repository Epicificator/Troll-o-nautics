ServerEvents.recipes(event => {
    event.remove({ id: 'petrolsparts:crafting/pneumatic_tube' })
    event.remove({ id: 'petrolsparts:mechanical_crafting/hydraulic_transmission' })
})

RecipeViewerEvents.removeEntries('item', event => {
    event.remove('petrolsparts:pneumatic_tube')
    event.remove('petrolsparts:hydraulic_transmission')
})