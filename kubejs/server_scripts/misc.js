ServerEvents.recipes(event => {
    event.smelting('spelunkery:charcoal_lump', 'minecraft:stick')
    event.blasting('spelunkery:charcoal_lump', 'minecraft:stick')
    event.campfireCooking('minecraft:torch', 'minecraft:stick', 0.1, 120)
//ice
    event.recipes.create.mixing('2x minecraft:ice', [Fluid.of('minecraft:water'), 'minecraft:packed_ice'])
//stones
    event.recipes.create.crushing('natures_spirit:pink_sand', 'natures_spirit:pink_sandstone')
    event.recipes.create.milling('natures_spirit:pink_sand', 'natures_spirit:pink_sandstone')
    event.recipes.create.crushing('natures_spirit:pink_sand', 'minecraft:pink_terracotta')
    event.recipes.create.milling('natures_spirit:pink_sand', 'minecraft:pink_terracotta')
    event.recipes.create.crushing('minecraft:red_sand', 'minecraft:red_sandstone')
    event.recipes.create.milling('minecraft:red_sand', 'minecraft:red_sandstone')
    //netherrack
    event.recipes.create.mixing('4x minecraft:netherrack', [Fluid.of('minecraft:lava', 250), '4x create:cinder_flour', '4x minecraft:cobblestone']).heated()
    //cobblestone
    event.recipes.create.mixing('3x minecraft:cobblestone', [Fluid.of('minecraft:lava', 500), Fluid.of('minecraft:water', 500)])

//sophisticated storage changes
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
    //sophisticatedbackpacks
    event.remove({ id: 'sophisticatedbackpacks:gold_backpack' })
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "key": {
            "B": { "item": "sophisticatedbackpacks:iron_backpack" },
            "G": { "tag": "c:ingots/brass" }
        },
        "pattern": [ "GGG", "GBG", "GGG" ],
        "result": { "count": 1, "id": "sophisticatedbackpacks:gold_backpack" }
    })
//Blank Disc
    event.stonecutting('2x kubejs:blank_disc', 'tfmg:plastic_sheet')
    const discs = Ingredient.of("#c:music_discs").getItemIds()
    discs.forEach(disc => {
        event.recipes.createdieselgenerators.basin_fermenting(
            [Item.of(disc).withLore("Copy"), disc],
            [Ingredient.of('#c:music_discs'), disc],
        ).processingTime(180)
    })
//Remove Turtles
    event.remove({ output: 'computercraft:turtle_normal' })
    event.remove({ output: 'computercraft:turtle_advanced' })
//Lodestone
    event.remove({ id: 'nomansland:lodestone' })
//Equipment
    event.remove({ id: 'tfmg:crafting/materials/steel_sword' })
    event.remove({ id: 'tfmg:crafting/materials/steel_pickaxe' })
    event.remove({ id: 'tfmg:crafting/materials/steel_axe' })
    event.remove({ id: 'tfmg:crafting/materials/steel_shovel' })
    event.remove({ id: 'tfmg:crafting/materials/steel_hoe' })
    event.remove({ id: 'tfmg:crafting/materials/aluminum_sword' })
    event.remove({ id: 'tfmg:crafting/materials/aluminum_pickaxe' })
    event.remove({ id: 'tfmg:crafting/materials/aluminum_axe' })
    event.remove({ id: 'tfmg:crafting/materials/aluminum_shovel' })
    event.remove({ id: 'tfmg:crafting/materials/aluminum_hoe' })
    //grapplemod
    event.remove({ mod: 'grapplemod' })
    event.shapeless(Item.of('grapplemod:grappling_hook', 1), ['minecraft:iron_pickaxe', '4x #c:ropes'])
//Furniture
    event.remove({ id: 'furniture:bin' })
    event.remove({ id: 'furniture:coffer' })
    event.shaped('furniture:coffer', ['ABA','BCB','BBB'], {A: 'minecraft:iron_nugget', B: '#minecraft:sulfur_cube_archetype/light', C: '#c:shulker_boxes'})
//Remove Infested Blocks Recipes
    const nests = ['infested_stone', 'infested_stone_bricks', 'infested_mossy_stone_bricks', 'infested_cracked_stone_bricks', 'infested_chiseled_stone_bricks', 'infested_deepslate']
    nests.forEach(nest => {
        event.remove({ id: 'create:haunting/'+nest+''})
    })
//Experience and Sculk
    event.recipes.createdieselgenerators
    .bulk_fermenting(
        ['2x minecraft:echo_shard', 'minecraft:sculk_catalyst'],
        ['minecraft:echo_shard', 'minecraft:sculk_catalyst', Fluid.of('create_enchantment_industry:experience', 4000)]
    ).processingTime(200)
    event.custom({
        "type": "create_enchantment_industry:grinding",
        "ingredients": [{ "item": "spelunkery:nephrite_chunk" }],
        "results": [{ "amount": 8, "id": "create_enchantment_industry:experience" }]
    })
    event.recipes.create.crushing('4x spelunkery:nephrite_chunk', 'spelunkery:nephrite').processingTime(250)
    event.recipes.create.filling('spelunkery:nephrite', [Fluid.of('create_enchantment_industry:experience', 40), 'spelunkery:nephrite_chunk'])
})

RecipeViewerEvents.removeEntries('item', event => {
    event.remove('computercraft:turtle_normal')
    event.remove('computercraft:turtle_advanced')
    event.remove('lootr:trophy')
    event.remove('tfmg:steel_sword')
    event.remove('tfmg:steel_pickaxe')
    event.remove('tfmg:steel_axe')
    event.remove('tfmg:steel_shovel')
    event.remove('tfmg:steel_hoe')
    event.remove('tfmg:aluminum_sword')
    event.remove('tfmg:aluminum_pickaxe')
    event.remove('tfmg:aluminum_axe')
    event.remove('tfmg:aluminum_shovel')
    event.remove('tfmg:aluminum_hoe')
    event.remove('grapplemod:ender_staff')
    event.remove('grapplemod:forcefield')
    event.remove('grapplemod:rocket')
    event.remove('grapplemod:base_upgrade')
    event.remove('grapplemod:long_fall_boots')
    event.remove('grapplemod:long_fall_boots_smithing_template')
})

//Tagging
ServerEvents.tags('item', event => {
    event.add('c:music_discs', 'kubejs:blank_disc')
    event.add('c:music_discs', 'betterarcheology:music_disc_swings')
    event.add('c:music_discs', 'furniture:cphs_pride')
    event.add('c:music_discs', 'furniture:letsdo_theme')
})
ServerEvents.tags('block', event => {
    event.removeAll('minecraft:enderman_holdable')
    event.remove('minecraft:mineable/pickaxe', 'nomansland:moon_carving')
})
