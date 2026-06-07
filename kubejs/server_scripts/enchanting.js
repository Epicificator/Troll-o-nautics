ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:enchanting_table' })
    event.shaped( 'minecraft:enchanting_table',
                  [ ' a ', 'bcb', 'ccc' ],
                  { a: 'minecraft:book', b: 'spelunkery:nephrite_chunk', c: 'minecraft:obsidian'})

    event.replaceInput({ id: 'create_enchantment_industry:item_application/experience_hatch' }, 'create:experience_block', 'spelunkery:nephrite_siphon')

})