ServerEvents.recipes(event => {
    event.remove({ output: 'computercraft:turtle_normal' })
    event.remove({ output: 'computercraft:turtle_advanced' })
})

RecipeViewerEvents.removeEntries('item', event => {
    event.remove('computercraft:turtle_normal')
    event.remove('computercraft:turtle_advanced')
    event.remove('lootr:trophy')
})
