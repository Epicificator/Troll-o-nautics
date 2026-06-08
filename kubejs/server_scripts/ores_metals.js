ServerEvents.tags('item', event => {
    event.add('c:molten_bronze', 'createbigcannons:molten_bronze')
})


ServerEvents.recipes(event => {

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

//Bronze
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_tinless' })
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_brass' })
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_tin' })
    event.remove({ id: 'createbigcannons:compacting/forge_bronze_ingot' })

//Tin


//Copper
    event.replaceInput({ input: '#c:nuggets/copper' }, 'spelunkery:copper_nugget', Ingredient.of('create:copper_nugget'))

//Cast Iron
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_tinless' })

//Steel



//MISC
    event.replaceInput({ id: 'abyssal_decor:moonsilver_ingot_recipe' }, 'minecraft:iron_ingot', Ingredient.of('oreganized:silver_ingot'))
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
    event.remove('spelunkery:copper_nugget')
    event.remove('tfmg:lead_ingot')
    event.remove('tfmg:lead_nugget')
    event.remove('tfmg:lead_block')
    event.remove('tfmg:raw_lead')
    event.remove('tfmg:raw_lead_block')
    event.remove('tfmg:lead_ore')
    event.remove('tfmg:deepslate_lead_ore')
    event.remove('spelunkery:sulfur_block')
    event.remove('spelunkery:sulfur')
})
