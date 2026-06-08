ServerEvents.recipes(event => {
    event.remove({ mod: 'sgjourney' })
})

RecipeViewerEvents.removeEntries("item",event => {
    event.remove(/^sgjourney:naquadah.*/)
    event.remove(/^sgjourney:jaffa.*/)
    event.remove(/^sgjourney:system_lord.*/)
})