ServerEvents.recipes(event => {
//remove spelunkery sulfur
    event.remove({ id: 'spelunkery:sulfur_from_block' })
    event.remove({ id: 'spelunkery:sulfur_block' })
    event.remove({ id: 'spelunkery:gunpowder' })
//sulfur dust
    event.remove({ id: 'create:crushing/sulfur' })
    event.custom({
        "type": "create:crushing",
        "ingredients": [{ "tag": "tweaks:sulfur" }],
        "results": [
            { "chance": 0.2, "id": "tfmg:sulfur_dust" },
            { "chance": 0.1, "id": "tfmg:sulfur_dust" }]
    })

})


RecipeViewerEvents.removeEntries('item', event => {
    event.remove('spelunkery:sulfur_block')
    event.remove('spelunkery:sulfur')
})
