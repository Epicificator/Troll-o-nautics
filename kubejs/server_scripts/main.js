// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server_scripts main.js)')

ServerEvents.recipes(event => {
    event.smelting('spelunkery:charcoal_lump', 'minecraft:stick')
    event.blasting('spelunkery:charcoal_lump', 'minecraft:stick')
    event.campfireCooking('minecraft:torch', 'minecraft:stick', 0.1, 120)

    //copycats
    event.remove({ id: 'sim_copycats:weightless_copycat' })
    event.recipes.create.mixing('sim_copycats:weightless_copycat', ['create:zinc_ingot', 'minecraft:phantom_membrane'])

    //overpacked giant backpack recipes
    event.recipes.shaped('overpacked:giant_backpack',
        ['aba', 'cdc', 'aaa'],
        { a: 'minecraft:leather', b: 'simulated:iron_handle', c: 'minecraft:iron_ingot', d: 'sophisticatedstorage:iron_chest' })
    const dyes = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black', 'maroon', 'rose', 'coral', 'indigo', 'navy', 'slate', 'olive', 'amber', 'beige', 'teal', 'mint', 'aqua', 'verdant', 'forest', 'ginger', 'tan']
    dyes.forEach(dye => {
        event.shapeless(`overpacked:${dye}_giant_backpack`,[`#c:dyes/${dye}`, Ingredient.of('#overpacked:giant_backpacks')])
    })

    //sophisticatedstorage changes
    event.replaceInput({ mod: 'sophisticatedstorage', input: '#c:ingots/gold' }, Ingredient.of('#c:ingots/gold'), 'create:brass_ingot')
    event.custom({
        "type": "sophisticatedstorage:double_chest_tier_upgrade",
        "category": "misc",
        "key": {
            "B": { "tag": "c:storage_blocks/brass" },
            "G": { "tag": "c:ingots/brass" },
            "S": { "item": "sophisticatedstorage:iron_chest" }},
        "pattern": [ "GGG", "GSG", "GBG" ],
        "result": { "count": 1, "id": "sophisticatedstorage:gold_chest" }
    })
    const stupgrade = (remove, input, output) => {
        event.remove({ id: remove })
        event.recipes.sophisticatedstorage.storage_tier_upgrade({
            category: "misc",
            key: { "G": { "item": "create:brass_ingot" }, "S": { "item": input }},
            pattern: [ "GGG", "GSG", "GGG" ],
            result: { "count": 1, "id": output }
        })
    }
    stupgrade('sophisticatedstorage:gold_chest', 'sophisticatedstorage:iron_chest', 'sophisticatedstorage:gold_chest')
    stupgrade('sophisticatedstorage:gold_barrel', 'sophisticatedstorage:iron_barrel', 'sophisticatedstorage:gold_barrel')
    stupgrade('sophisticatedstorage:gold_shulker_box', 'sophisticatedstorage:iron_shulker_box', 'sophisticatedstorage:gold_shulker_box')
    stupgrade('sophisticatedstorage:limited_gold_barrel_1', 'sophisticatedstorage:limited_iron_barrel_1', 'sophisticatedstorage:limited_gold_barrel_1')
    stupgrade('sophisticatedstorage:limited_gold_barrel_2', 'sophisticatedstorage:limited_iron_barrel_2', 'sophisticatedstorage:limited_gold_barrel_2')
    stupgrade('sophisticatedstorage:limited_gold_barrel_3', 'sophisticatedstorage:limited_iron_barrel_3', 'sophisticatedstorage:limited_gold_barrel_3')
    stupgrade('sophisticatedstorage:limited_gold_barrel_4', 'sophisticatedstorage:limited_iron_barrel_4', 'sophisticatedstorage:limited_gold_barrel_4')
})
