ServerEvents.tags('fluid', event => {
    event.remove('c:molten_bronze', 'createbigcannons:molten_bronze')
    event.remove('c:molten_bronze', 'createbigcannons:flowing_molten_bronze')
    event.add('c:molten_bronze', 'createmetallurgy:molten_bronze')
    event.add('c:molten_bronze', 'createmetallurgy:flowing_molten_bronze')
    event.remove('c:molten_steel', 'tfmg:molten_steel')
    event.remove('c:molten_steel', 'tfmg:flowing_molten_steel')
    event.remove('c:molten_steel', 'createbigcannons:molten_steel')
    event.remove('c:molten_steel', 'createbigcannons:flowing_molten_steel')
    event.add('c:molten_steel', 'createmetallurgy:molten_steel')
    event.add('c:molten_steel', 'createmetallurgy:flowing_molten_steel')

})
ServerEvents.tags('item', event => {
    event.remove('c:storage_blocks/steel', 'createbigcannons:steel_block')
    event.remove('c:ingots/steel', 'createbigcannons:steel_ingot')
    event.remove('c:nuggets/steel', 'createbigcannons:steel_scrap')
    event.remove('c:storage_blocks/steel', 'createmetallurgy:steel_block')
    event.remove('c:ingots/steel', 'createmetallurgy:steel_ingot')
    event.remove('c:storage_blocks/cast_iron', 'createbigcannons:cast_iron_block')
    event.remove('c:ingots/cast_iron', 'createbigcannons:cast_iron_ingot')
    event.remove('c:nuggets/cast_iron', 'createbigcannons:cast_iron_nugget')
    event.remove('c:nuggets/netherite', 'oreganized:netherite_nugget')
})


ServerEvents.recipes(event => {

//Helper
    const tablecast = (input, amount, output, mold, time) => {
        event.recipes.createmetallurgy.casting_in_table({
            ingredients: [{ "type": "neoforge:single", "amount": amount, "fluid": input }, { "item": mold }],
            processing_time: time,
            result: { "item": { "count": 1, "id": output }}
        })
    }
    const basincast = (input, amount, output, time) => {
        event.recipes.createmetallurgy.casting_in_basin({
            ingredients: [{ "type": "neoforge:single", "amount": amount, "fluid": input }],
            processing_time: time,
            result: { "item": { "count": 1, "id": output }}
        })
    }
    const foundryMelting = (input, output, amount, heat, time) => {
        event.recipes.createmetallurgy.melting({
            heat_requirement: heat,
            ingredients: [{ "item": input }],
            processing_time: time,
            results: [{ "amount": amount, "id": output }]
        })
    }
    const foundryMelting2 = (input, output, amount, output2, amount2, heat, time) => {
        event.recipes.createmetallurgy.melting({
            heat_requirement: heat,
            ingredients: [{ "item": input }],
            processing_time: time,
            results: [{ "amount": amount, "id": output }, { "amount": amount2, "id": output2 }]
        })
    }
    const bulkMelting = (input, output, amount, heat, time) => {
        event.recipes.createmetallurgy.bulk_melting({
            ingredients: [{ "item": input }],
            minHeatRequirement: heat,
            processing_time: time,
            results: [{ "amount": amount, "id": output }]
        })
    }

//Iron
    event.remove({ id: 'create:crushing/crimsite_recycling' })
    event.remove({ id: 'create:crushing/crimsite' })

//Copper
    event.remove({ id: 'create:crushing/veridium_recycling' })
    event.remove({ id: 'create:crushing/veridium' })
    event.replaceInput({ input: '#c:nuggets/copper' }, 'spelunkery:copper_nugget', 'create:copper_nugget')

//Zinc
    event.remove({ id: 'create:crushing/asurine_recycling' })
    event.remove({ id: 'create:crushing/asurine' })


//Netherite
    event.remove({ id: 'oreganized:netherite_nugget' })
    event.remove({ input: 'oreganized:netherite_nugget' })

//Platinum | Palladium
    event.remove({ output: 'createpropulsion:platinum_block' })
    event.remove({ output: 'createpropulsion:platinum_ingot' })
    event.remove({ output: 'createpropulsion:platinum_nugget' })
    event.replaceInput({ input: '#c:ingots/platinum' }, 'createpropulsion:platinum_ingot', 'galosphere:palladium_ingot')
    event.replaceInput({ input: '#c:nuggets/platinum' }, 'createpropulsion:platinum_nugget', 'galosphere:palladium_nugget')
    event.replaceInput({ input: '#c:storage_blocks/platinum' }, 'createpropulsion:platinum_block', 'galosphere:palladium_block')

//Lead
    event.replaceInput({ input: '#c:ingots/lead' }, 'tfmg:lead_ingot', 'oreganized:lead_ingot')
    event.remove({ output: 'tfmg:lead_ingot' })
    event.remove({ output: 'tfmg:lead_block' })
    event.remove({ output: 'tfmg:lead_nugget' })
    event.remove({ id: 'tfmg:pressing/lead_ingot' })
    event.recipes.create.pressing('tfmg:lead_sheet', 'oreganized:lead_ingot')
    event.remove({ id: 'createmetallurgy:casting_in_table/lead/plate' })
    tablecast('oreganized:molten_lead', 90, 'tfmg:lead_sheet','createmetallurgy:graphite_plate_mold', 60)
    //lead nuggets
    event.replaceInput({ input: '#c:nuggets/lead' }, 'tfmg:lead_nugget', 'oreganized:lead_nugget')
    //lead proccessing
    event.remove({ id: 'create:crushing/galena' })
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_lead', 0.4), CreateItem.of('2x spelunkery:raw_lead_nugget', 0.2)], 'tfmg:galena')
    event.remove({ id: 'create:splashing/oreganized/crushed_raw_lead' })
    event.recipes.create.splashing('9x spelunkery:raw_lead_nugget', 'create:crushed_raw_lead')
    event.remove({ id: 'spelunkery:crushing/oreganized/glance_recycling' })
    event.remove({ id: 'oreganized:crushing/glance' })
    event.remove({ id: 'oreganized:crushing/glance_recycling' })
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_lead', 0.6), CreateItem.of('2x spelunkery:raw_lead_nugget', 0.3)], Ingredient.of('#tweaks:glance_raw'))
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_lead', 0.3), CreateItem.of('2x spelunkery:raw_lead_nugget', 0.1)], Ingredient.of('#tweaks:glance_halve'))
    event.remove({ id: 'oreganized:mixing/glance' })
    event.recipes.create.mixing('oreganized:glance', ['minecraft:diorite', 'oreganized:lead_nugget'])
    //raw lead
    event.replaceInput({ input: '#c:raw_materials/lead' }, 'tfmg:raw_lead', 'oreganized:raw_lead')
    event.remove({ id: 'create:crushing/raw_lead' })
    event.recipes.create.crushing(['create:crushed_raw_lead', CreateItem.of('create:experience_nugget', 0.75)], 'oreganized:raw_lead').processingTime(400)
    event.remove({ id: 'create:crushing/lead_ore' })
    event.recipes.create.crushing(['create:crushed_raw_lead', CreateItem.of('create:crushed_raw_lead', 0.75), CreateItem.of('create:experience_nugget', 0.75)], Ingredient.of('#tweaks:ores_lead')).processingTime(400)
    event.remove({ id: 'create:crushing/raw_lead_block' })
    event.recipes.create.crushing(['9x create:crushed_raw_lead', CreateItem.of('9x create:experience_nugget', 0.75)], 'oreganized:raw_lead_block').processingTime(400)
    event.remove({ id: 'tfmg:crafting/materials/raw_lead_block' })
    //molten lead
    event.remove({ id: 'oreganized:mixing/molten_lead' })
    event.remove({ id: 'createmetallurgy:bulk_melting/lead/block' })
    bulkMelting('oreganized:lead_block', 'oreganized:molten_lead', 810, 1, 244)
    event.remove({ id: 'createmetallurgy:bulk_melting/lead/raw_block' })
    event.custom({
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [{ "item": "oreganized:raw_lead_block" }],
        "minHeatRequirement": 1,
        "processing_time": 224,
        "results": [
            { "amount": 810, "id": "oreganized:molten_lead" },
            { "amount": 405, "id": "createmetallurgy:molten_slag" }]
    })
    event.remove({ id: 'createmetallurgy:melting/lead/ingot' })
    foundryMelting('oreganized:lead_ingot', 'oreganized:molten_lead', 90, 'heated', 40)
    event.remove({ id: 'createmetallurgy:melting/lead/plate' })
    foundryMelting('tfmg:lead_sheet', 'oreganized:molten_lead', 90, 'heated', 40)
    event.remove({ id: 'createmetallurgy:melting/lead/nugget' })
    foundryMelting('oreganized:lead_nugget', 'oreganized:molten_lead', 10, 'heated', 4)
    event.remove({ id: 'createmetallurgy:melting/lead/raw_material' })
    foundryMelting2('oreganized:raw_lead', 'oreganized:molten_lead', 90, 'createmetallurgy:molten_slag', 45, 'heated', 40)
    event.remove({ id: 'createmetallurgy:melting/lead/raw_crushed' })
    foundryMelting2('create:crushed_raw_lead', 'oreganized:molten_lead', 90, 'createmetallurgy:molten_slag', 45, 'heated', 48)


//Bronze
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_tinless' })
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_brass' })
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_tin' })
    event.remove({ id: 'createbigcannons:compacting/forge_bronze_ingot' })

//Brass
    event.remove({ id: 'create:mixing/brass_ingot' })
    event.recipes.create.mixing('3x create:brass_ingot', ['minecraft:copper_ingot', 'minecraft:copper_ingot', 'create:zinc_ingot']).heated()
    event.remove({ id: 'createmetallurgy:alloying/brass' })
    event.custom({
        "type": "createmetallurgy:alloying",
        "heat_requirement": "heated",
        "ingredients": [
            { "type": "neoforge:single", "amount": 20, "fluid": "createmetallurgy:molten_copper" },
            { "type": "neoforge:single", "amount": 10, "fluid": "createmetallurgy:molten_zinc" }],
        "results": [{ "amount": 30, "id": "createmetallurgy:molten_brass" }]
    })

//Electrum
    //crushing
    event.remove({ id: 'create:crushing/tuff' })
    event.remove({ id: 'create:crushing/tuff_recycling' })
    event.remove({ id: 'spelunkery:crushing/tuff' })
    event.remove({ id: 'create:crushing/ochrum' })
    event.remove({ id: 'create:crushing/ochrum_recycling' })
    //mixing
    event.remove({ id: 'oreganized:mixing/electrum_ingot' })
    event.recipes.create.mixing('oreganized:electrum_ingot', ['oreganized:silver_ingot', 'minecraft:gold_ingot', ]).heated()

//Steel
    //steel item remove
    event.remove({ output: 'createbigcannons:steel_block' })
    event.remove({ output: 'createbigcannons:steel_ingot' })
    event.remove({ output: 'createbigcannons:steel_scrap' })
    event.remove({ output: 'createmetallurgy:steel_block' })
    event.remove({ output: 'createmetallurgy:steel_ingot' })
    //steel fluid remove
    event.remove({ id: 'createmetallurgy:alloying/steel' })
    event.remove({ id: 'createmetallurgy:entity_melting/wither_skeleton' })
    event.remove({ id: 'createmetallurgy:casting_in_table/steel/plate' })
    //steel block basin cast
    basincast('createmetallurgy:molten_steel', 810, 'tfmg:steel_block', 480)
    //steel ingot cast
    event.remove({ id: 'tfmg:casting/steel' })
    tablecast('createmetallurgy:molten_steel', 90, 'tfmg:steel_ingot', 'createmetallurgy:graphite_ingot_mold', 200)
    //steel rod table cast
    event.remove({ id: 'createmetallurgy:casting_in_table/steel/rod' })
    tablecast('createmetallurgy:molten_steel', 18, 'tfmg:rebar', 'createmetallurgy:graphite_rod_mold', 30)
    //steel rod melting
    event.remove({ id: 'createmetallurgy:melting/steel/rod' })
    foundryMelting('tfmg:rebar', 'createmetallurgy:molten_steel', 18, 'heated', 20)
    //chemical vat steel
    event.remove({ id: 'tfmg:vat_machine_recipe/arc_furnace_steel' })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [ "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "create:crushed_raw_iron" },
            { "tag": "tfmg:flux" },
            { "item": "tfmg:coal_coke_dust" }],
        "machines": [
            "tfmg:graphite_electrode",
            "tfmg:graphite_electrode",
            "tfmg:graphite_electrode"
        ],
        "min_size": 9,
        "processing_time": 20,
        "results": [
            { "chance": 0.9, "id": "tfmg:coal_coke_dust" },
            { "amount": 144, "id": "createmetallurgy:molten_steel" },
            { "amount": 288, "id": "createmetallurgy:molten_slag" }]
    })
    //blast furnace steel
    event.remove({ id: 'tfmg:industrial_blasting/steel' })
    event.custom({
        "type": "tfmg:industrial_blasting",
        "hot_air_usage": 20,
        "ingredients": [
            { "item": "create:crushed_raw_iron" },
            { "tag": "tfmg:flux" }],
        "processing_time": 20,
        "results": [
            { "amount": 144, "id": "createmetallurgy:molten_steel" },
            { "amount": 144, "id": "createmetallurgy:molten_slag" },
            { "amount": 200, "id": "tfmg:furnace_gas" }]
    })
    event.remove({ id: 'tfmg:industrial_blasting/steel_from_dust' })
    event.custom({
        "type": "tfmg:industrial_blasting",
        "hot_air_usage": 20,
        "ingredients": [
            { "tag": "c:dusts/iron" },
            { "tag": "tfmg:flux" }],
        "processing_time": 20,
        "results": [
            { "amount": 144, "id": "createmetallurgy:molten_steel" },
            { "amount": 144, "id": "createmetallurgy:molten_slag" },
            { "amount": 20, "id": "tfmg:furnace_gas" }]
    })
    event.remove({ id: 'tfmg:industrial_blasting/steel_from_raw_iron' })
    event.custom({
        "type": "tfmg:industrial_blasting",
        "hot_air_usage": 40,
        "ingredients": [
            { "item": "minecraft:raw_iron" },
            { "tag": "tfmg:flux" }],
        "processing_time": 40,
        "results": [
            { "amount": 288, "id": "createmetallurgy:molten_steel" },
            { "amount": 288, "id": "createmetallurgy:molten_slag" },
            { "amount": 200, "id": "tfmg:furnace_gas" }]
    })
    //slag
    event.remove({ id: 'createmetallurgy:crafting/materials/slag_block' })
    event.remove({ id: 'createmetallurgy:crafting/materials/slag_from_block' })
    event.remove({ id: 'createmetallurgy:casting_in_table/slag_casting' })
    event.remove({ id: 'createmetallurgy:casting_in_basin/slag_block_casting' })
    event.remove({ id: 'tfmg:casting/slag_block' })
    basincast('createmetallurgy:molten_slag', 810, 'tfmg:slag_block', 480)
    //tuff from slag
    event.remove({ id: 'createmetallurgy:compacting/tuff_from_slag' })
    event.recipes.create.compacting('minecraft:tuff', ['4x tfmg:slag', 'minecraft:gravel', 'minecraft:cobblestone'])

//Cast Iron
    //cast iron crafting
    event.remove({ id: 'createbigcannons:cast_iron_block' })
    event.remove({ id: 'createbigcannons:cast_iron_ingot_from_block' })
    event.remove({ id: 'createbigcannons:cast_iron_ingot_from_nuggets' })
    event.remove({ id: 'createbigcannons:cast_iron_nugget' })
    event.remove({ id: 'createbigcannons:compacting/forge_cast_iron_block' })
    event.remove({ id: 'createbigcannons:compacting/forge_cast_iron_ingot' })
    event.remove({ id: 'createbigcannons:compacting/forge_cast_iron_nugget' })
    event.remove({ id: 'createbigcannons:compacting/iron_to_cast_iron_block' })
    event.remove({ id: 'createbigcannons:compacting/iron_to_cast_iron_ingot' })
    //cast iron melting
    event.remove({ id: 'createbigcannons:melting/melt_cast_iron_block' })
    bulkMelting('tfmg:cast_iron_block', 'createbigcannons:molten_cast_iron', 810, 7, 224)
    event.remove({ id: 'createbigcannons:melting/melt_cast_iron_ingot' })
    foundryMelting('tfmg:cast_iron_ingot', 'createbigcannons:molten_cast_iron', 90, 'heated', 40)
    event.remove({ id: 'createbigcannons:melting/melt_cast_iron_nugget' })
    foundryMelting('tfmg:cast_iron_nugget', 'createbigcannons:molten_cast_iron', 10, 'heated', 4)
    foundryMelting('tfmg:cast_iron_sheet', 'createbigcannons:molten_cast_iron', 90, 'heated', 40)
    //cast iron block basin cast
    basincast('createbigcannons:molten_cast_iron', 810, 'tfmg:cast_iron_block', 480)
    //cast iron ingot cast
    tablecast('createbigcannons:molten_cast_iron', 90, 'tfmg:cast_iron_ingot', 'createmetallurgy:graphite_ingot_mold', 60)
    //cast iron nugget table cast
    tablecast('createbigcannons:molten_cast_iron', 10, 'tfmg:cast_iron_nugget', 'createmetallurgy:graphite_nugget_mold', 6)
    //cast iron sheet table cast
    tablecast('createbigcannons:molten_cast_iron', 90, 'tfmg:cast_iron_sheet', 'createmetallurgy:graphite_plate_mold', 60)

//Nethersteel
    //nethersteel alloying
    event.remove({ id: 'createbigcannons:mixing/alloy_nethersteel_steel' })
    event.remove({ id: 'createbigcannons:mixing/alloy_nethersteel_cast_iron' })
    event.custom({
        "type": "createmetallurgy:alloying",
        "heat_requirement": "superheated",
        "ingredients": [
            { "item": "minecraft:netherite_scrap" },
            { "type": "neoforge:single", "amount": 360, "fluid": "createmetallurgy:molten_steel" }],
        "results": [{ "amount": 720, "id": "createbigcannons:molten_nethersteel" }]
    })
    event.custom({
        "type": "createmetallurgy:alloying",
        "heat_requirement": "superheated",
        "ingredients": [
            { "item": "minecraft:netherite_scrap" },
            { "type": "neoforge:single", "amount": 720 , "fluid": "createbigcannons:molten_cast_iron" }],
        "results": [{ "amount": 720, "id": "createbigcannons:molten_nethersteel" }]
    })
    //nethersteel melting
    event.remove({ id: 'createbigcannons:melting/melt_nethersteel_block' })
    bulkMelting('createbigcannons:nethersteel_block', 'createbigcannons:molten_nethersteel', 810, 17, 224)
    event.remove({ id: 'createbigcannons:melting/melt_nethersteel_ingot' })
    foundryMelting('createbigcannons:nethersteel_ingot', 'createbigcannons:molten_nethersteel', 90, 'superheated', 40)
    event.remove({ id: 'createbigcannons:melting/melt_nethersteel_nugget' })
    foundryMelting('createbigcannons:nethersteel_nugget', 'createbigcannons:molten_nethersteel', 10, 'superheated', 4)
    //nethersteel casting
    event.remove({ id: 'createbigcannons:compacting/forge_nethersteel_block' })
    basincast('createbigcannons:molten_nethersteel', 810, 'createbigcannons:nethersteel_block', 480)
    event.remove({ id: 'createbigcannons:compacting/forge_nethersteel_ingot' })
    tablecast('createbigcannons:molten_nethersteel', 90, 'createbigcannons:nethersteel_ingot', 'createmetallurgy:graphite_ingot_mold', 120)
    event.remove({ id: 'createbigcannons:compacting/forge_nethersteel_nugget' })
    tablecast('createbigcannons:molten_nethersteel', 10, 'createbigcannons:nethersteel_nugget', 'createmetallurgy:graphite_nugget_mold', 6)

//Casting items
    event.remove({ id: 'createmetallurgy:crafting/content/casting_basin'})
    event.recipes.shaped('createmetallurgy:casting_basin',
        ['a a', 'a a', 'aba'],
        { a: 'create:andesite_alloy', b: 'tfmg:fireproof_brick' })
    event.remove({ id: 'createmetallurgy:crafting/content/casting_table'})
    event.recipes.shaped('createmetallurgy:casting_table',
        ['aba', 'a a', 'a a'],
        { a: 'create:andesite_alloy', b: 'tfmg:fireproof_brick' })
//MISC
    event.replaceInput({ id: 'abyssal_decor:moonsilver_ingot_recipe' }, 'minecraft:iron_ingot', 'galosphere:palladium_ingot')
    //remove createbigcannons melting
    event.remove({ id: 'createbigcannons:basin_foundry_lid' })
    event.remove({ type: 'createbigcannons:melting' })
    //remove spelunkery sulfur
    event.remove({ id: 'spelunkery:sulfur_from_block' })
    event.remove({ id: 'spelunkery:sulfur_block' })
    event.remove({ id: 'spelunkery:gunpowder' })
    //sulfur dust
    event.remove({ id: 'create:crushing/sulfur' })

    event.recipes.create.crushing([CreateItem.of('tfmg:sulfur_dust', 0.2), CreateItem.of('tfmg:sulfur_dust', 0.1)], Ingredient.of('#tweaks:sulfur'))
    //silicon
    event.remove({ id: 'tfmg:casting/silicon' })
    tablecast('tfmg:liquid_silicon', 144, 'tfmg:silicon_ingot', 'createmetallurgy:graphite_ingot_mold', 200)
    //plastic
    event.remove({ id: 'tfmg:casting/plastic_sheet' })
    tablecast('tfmg:molten_plastic', 200, 'tfmg:plastic_sheet', 'createmetallurgy:graphite_plate_mold', 100)
    //cinderblock
    event.remove({ id: 'tfmg:casting/cinderblock' })
    tablecast('tfmg:liquid_concrete', 144, 'tfmg:cinderblock', 'createmetallurgy:graphite_ingot_mold', 50)

})

RecipeViewerEvents.removeEntries('fluid', event => {
    event.remove('createbigcannons:molten_bronze')
    event.remove('createbigcannons:molten_steel')
    event.remove('tfmg:molten_steel')
    event.remove('tfmg:molten_slag')
    event.remove('createmetallurgy:molten_lead')
    event.remove('createpropulsion:coral')
})

RecipeViewerEvents.removeEntries('item', event => {
    //materials
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
    event.remove('createmetallurgy:slag_block')
    event.remove('createmetallurgy:slag')
    event.remove('createpropulsion:platinum_ore')
    event.remove('createpropulsion:deepslate_platinum_ore')
    event.remove('createpropulsion:platinum_block')
    event.remove('createpropulsion:raw_platinum_block')
    event.remove('createpropulsion:platinum_ingot')
    event.remove('createpropulsion:platinum_nugget')
    event.remove('createpropulsion:raw_platinum')
    event.remove('oreganized:netherite_nugget')
    //steel
    event.remove('createbigcannons:steel_block')
    event.remove('createbigcannons:steel_ingot')
    event.remove('createbigcannons:steel_scrap')
    event.remove('createmetallurgy:steel_block')
    event.remove('createmetallurgy:steel_ingot')
    //cast iron
    event.remove('createbigcannons:cast_iron_block')
    event.remove('createbigcannons:cast_iron_ingot')
    event.remove('createbigcannons:cast_iron_nugget')
    //buckets
    event.remove('createbigcannons:molten_bronze_bucket')
    event.remove('createbigcannons:molten_steel_bucket')
    event.remove('tfmg:molten_steel_bucket')
    event.remove('tfmg:molten_slag_bucket')
    event.remove('createmetallurgy:molten_lead_bucket')
    event.remove('createpropulsion:coral_bucket')
    //blocks
    event.remove('createbigcannons:basin_foundry_lid')
})
