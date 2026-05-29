ServerEvents.tags('item', event => {
    event.add('c:ingots/tin', 'ihmt:tin_ingot')
    event.add('c:nuggets/tin', 'ihmt:tin_nugget')
    event.add('c:raw_materials/tin', 'ihmt:raw_tin')
    event.add('c:molten_bronze', 'createbigcannons:molten_bronze')
})


ServerEvents.recipes(event => {
//Remove ihmt Aluminum
    event.remove({ output: 'ihmt:raw_aluminum' })
    event.remove({ input: 'ihmt:raw_aluminum' })
    event.remove({ input: 'ihmt:aluminum_ingot' })
    event.shapeless(
        Item.of('ihmt:aluminum_block', 1),
        [ '9x tfmg:aluminum_ingot' ])
    event.shapeless(
        Item.of('ihmt:aluminum_tile', 1),
        [ 'tfmg:aluminum_ingot', '#c:stones' ])

//Electrum
    //Crushing
    event.remove({ id: 'create:crushing/tuff' })
    event.remove({ id: 'create:crushing/tuff_recycling' })
    event.remove({ id: 'spelunkery:crushing/tuff' })
    event.remove({ id: 'create:crushing/ochrum' })
    event.remove({ id: 'create:crushing/ochrum_recycling' })

//Lead
    event.replaceInput({ input: '#c:ingots/lead' }, 'tfmg:lead_ingot', Ingredient.of('oreganized:lead_ingot'))
    event.remove({ output: 'tfmg:lead_ingot' })
    event.remove({ output: 'tfmg:lead_block' })
    event.remove({ output: 'tfmg:lead_nugget' })
    event.remove({ id: 'tfmg:pressing/lead_ingot' })
    event.custom({
        "type": "create:pressing",
        "ingredients": [{ item: "oreganized:lead_ingot" }],
        "results": [{ "id": "tfmg:lead_sheet" }]
    })
    //nuggets
    event.replaceInput({ input: '#c:nuggets/lead' }, 'tfmg:lead_nugget', Ingredient.of('oreganized:lead_nugget'))
    event.remove({ id: 'create:crushing/galena' })
    event.custom({
        "type": "create:crushing",
        "ingredients": [{ item: "tfmg:galena" }],
        "results": [
            { "chance": 0.4, "id": "create:crushed_raw_lead" },
            { "chance": 0.1, "count": 2, "id": "spelunkery:raw_lead_nugget" }]
    })
    event.remove({ id: 'create:splashing/oreganized/crushed_raw_lead' })
    event.custom({
        "type": "create:splashing",
        "ingredients": [{ item: "create:crushed_raw_lead" }],
        "results": [{ "count": 9, "id": "spelunkery:raw_lead_nugget" }]
    })
    event.remove({ id: 'spelunkery:crushing/oreganized/glance_recycling' })
    event.remove({ id: 'oreganized:crushing/glance' })
    event.remove({ id: 'oreganized:crushing/glance_recycling' })
    event.custom({
        "type": "create:crushing",
        "ingredients": [{ "tag": "tweaks:glance_raw" }],
        "results": [
            { "chance": 0.8, "id": "create:crushed_raw_lead" },
            { "chance": 0.8, "id": "spelunkery:raw_lead_nugget" }]
    })
    event.custom({
        "type": "create:crushing",
        "ingredients": [{ "tag": "tweaks:glance_halve" }],
        "results": [
            { "chance": 0.4, "id": "create:crushed_raw_lead" },
            { "chance": 0.4, "id": "spelunkery:raw_lead_nugget" }]
    })
    event.remove({ id: 'oreganized:mixing/glance' })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            { item: "minecraft:diorite" },
            { item: "oreganized:lead_nugget" }],
        "results": [{ "id": "oreganized:glance" }]
    })
    //raw
    event.replaceInput({ input: '#c:raw_materials/lead' }, 'tfmg:raw_lead', Ingredient.of('oreganized:raw_lead'))
    event.remove({ id: 'create:crushing/raw_lead' })
    event.custom({
        "type": "create:crushing",
        "ingredients": [{ item: "oreganized:raw_lead" }],
        "processing_time": 400,
        "results": [
            { "id": "create:crushed_raw_lead" },
            { "chance": 0.75, "id": "create:experience_nugget" }]
    })
    event.remove({ id: 'create:crushing/lead_ore' })
    event.custom({
        "type": "create:crushing",
        "ingredients": [{ "tag": "tweaks:ores_lead" }],
        "processing_time": 400,
        "results": [
            { "id": "create:crushed_raw_lead" },
            { "chance": 0.75, "id": "create:crushed_raw_lead" },
            { "chance": 0.75, "id": "create:experience_nugget" }]
    })
    event.remove({ id: 'create:crushing/raw_lead_block' })
    event.custom({
        "type": "create:crushing",
        "ingredients": [{ item: "oreganized:raw_lead_block" }],
        "processing_time": 400,
        "results": [
            { "count": 9, "id": "create:crushed_raw_lead" },
            { "chance": 0.75, "count": 9, "id": "create:experience_nugget" }]
    })
    event.remove({ id: 'tfmg:crafting/materials/raw_lead_block' })

//Brass
    event.replaceInput({ id: 'ihmt:bs_tile' }, 'ihmt:bronze_ingot', Ingredient.of('create:brass_ingot'))

//Bronze
    event.replaceInput({ input: 'ihmt:bronze_ingot' }, 'ihmt:bronze_ingot', Ingredient.of('createbigcannons:bronze_ingot'))
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_tinless' })
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_brass' })
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_tin' })
    event.remove({ id: 'createbigcannons:compacting/forge_bronze_ingot' })

    event.remove({ id: 'ihmt:bronze_mix_craft' })
    event.remove({ id: 'ihmt:bronze_ingot_craft' })
    event.remove({ id: 'ihmt:bz_block' })
    event.remove({ id: 'ihmt:bblockingot' })
    event.shaped( Item.of('ihmt:bronze_tile_1', 8),
        [ ' a ', 'aba', ' a ' ],
        { a: 'createbigcannons:bronze_ingot', b: { "tag": "c:stones" }})


//Tin


//Copper
    event.replaceInput({ input: '#c:nuggets/copper' }, 'spelunkery:copper_nugget', Ingredient.of('create:copper_nugget'))
    event.remove({ id: 'ihmt:copper_nugget_craft' })

//MISC
    event.replaceInput({ id: 'abyssal_decor:moonsilver_ingot_recipe' }, 'minecraft:iron_ingot', Ingredient.of('oreganized:silver_ingot'))
})


RecipeViewerEvents.removeEntries('item', event => {
    event.remove('ihmt:aluminum_ingot')
    event.remove('ihmt:raw_aluminum')
    event.remove('ihmt:bauxite_ore')
    event.remove('ihmt:deepslate_bauxite_ore')
    event.remove('ihmt:bronze_ingot')
    event.remove('ihmt:bronze_mix')
    event.remove('ihmt:copper_nugget')
    event.remove('spelunkery:copper_nugget')
    event.remove('tfmg:lead_ingot')
    event.remove('tfmg:lead_nugget')
    event.remove('tfmg:lead_block')
    event.remove('tfmg:raw_lead')
    event.remove('tfmg:raw_lead_block')
    event.remove('tfmg:lead_ore')
    event.remove('tfmg:deepslate_lead_ore')
})
