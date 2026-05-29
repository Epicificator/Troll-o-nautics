ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:enchanting_table' })
    event.shaped( Item.of('minecraft:enchanting_table', 1),
                  [ ' a ', 'bcb', 'ccc' ],
                  { a: 'minecraft:book', b: 'spelunkery:nephrite_chunk', c: 'minecraft:obsidian'})

    event.replaceInput(
        { id: 'create_enchantment_industry:item_application/experience_hatch' },
        'create:experience_block',
        Ingredient.of('spelunkery:nephrite_siphon')
    )

})