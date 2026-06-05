ServerEvents.recipes(event => {

    event.remove({ id: 'createfood:farmersdelight/cooking/salt_from_cooking' })
    event.custom({
        "type":"farmersdelight:cooking",
        "experience":0.2,
        "ingredients":[{ "item":"minecraft:water_bucket" }],
        "recipe_book_tab":"misc",
        "result":{ "count":1, "id":"spelunkery:salt_bucket"}
    })


    event.remove({ id: 'create_dragons_plus:sandpaper_polishing/spelunkery/rock_salt' })
//salt crushing
    event.recipes.create.crushing(
        'spelunkery:salt',
        'spelunkery:rock_salt')
    event.recipes.create.crushing(
        ['3x spelunkery:salt', CreateItem.of('spelunkery:salt', 0.5)],
        Ingredient.of('#tweaks:salt_crushable'))
    event.recipes.create.crushing(
        CreateItem.of('spelunkery:salt', 0.5),
        Ingredient.of('#tweaks:salt_crushable_halve'))
//salt milling
    event.recipes.create.milling(
        CreateItem.of('spelunkery:salt', 0.9),
        'spelunkery:rock_salt')
    event.recipes.create.milling(
        ['2x spelunkery:salt', CreateItem.of('spelunkery:salt', 0.4)],
                                  Ingredient.of('#tweaks:salt_crushable'))
    event.recipes.create.milling(
        CreateItem.of('spelunkery:salt', 0.4),
        Ingredient.of('#tweaks:salt_crushable_halve'))
})

RecipeViewerEvents.removeEntries('item', event => {
    event.remove('createfood:salt')
})