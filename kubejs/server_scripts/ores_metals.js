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
    event.add('spelunkery:diamond_ores', 'natures_spirit:chert_diamond_ore')
    event.add('spelunkery:emerald_ores', 'natures_spirit:chert_emerald_ore')
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
//Orestones
    //ochrum
        event.recipes.create.mixing(['kubejs:ochrum_node', CreateItem.of('kubejs:ochrum_node', 0.8)], ['minecraft:glowstone_dust', 'createmetallurgy:dirty_gold_dust', 'minecraft:sandstone']).heated()
        event.recipes.create.mixing(['kubejs:ochrum_node', CreateItem.of('kubejs:ochrum_node', 0.3)], ['minecraft:glowstone_dust', 'spelunkery:raw_gold_nugget', 'minecraft:sandstone']).heated()
        const ochrum_nodule = 'kubejs:ochrum_nodule'
        event.recipes.createSequencedAssembly([
            'create:ochrum'
        ], 'kubejs:ochrum_node', [
            event.recipes.create.filling(ochrum_nodule, [ochrum_nodule, Fluid.of('supplementaries:lumisene', 500)]),
            event.recipes.create.pressing(ochrum_nodule, ochrum_nodule)
        ]).transitionalItem(ochrum_nodule).loops(1)
    //asurine
        event.recipes.create.mixing(['kubejs:asurine_node', CreateItem.of('kubejs:asurine_node', 0.8)], ['2x minecraft:clay_ball', 'createmetallurgy:dirty_zinc_dust', 'minecraft:blue_ice'])
        event.recipes.create.mixing(['kubejs:asurine_node', CreateItem.of('kubejs:asurine_node', 0.3)], ['2x minecraft:clay_ball', 'spelunkery:raw_zinc_nugget', 'minecraft:blue_ice'])
        const asurine_nodule = 'kubejs:asurine_nodule'
        event.recipes.createSequencedAssembly([
            'create:asurine'
        ], 'kubejs:asurine_node', [
            event.recipes.create.filling(asurine_nodule, [asurine_nodule, Fluid.of('minecraft:water', 500)]),
            event.recipes.create.pressing(asurine_nodule, asurine_nodule)
        ]).transitionalItem(asurine_nodule).loops(2)
    //crimiste
        event.recipes.create.mixing(['kubejs:crimsite_node', CreateItem.of('kubejs:crimsite_node', 0.8)], ['create:cinder_flour', 'createmetallurgy:dirty_iron_dust', 'minecraft:cobblestone']).heated()
        event.recipes.create.mixing(['kubejs:crimsite_node', CreateItem.of('kubejs:crimsite_node', 0.3)], ['create:cinder_flour', 'spelunkery:raw_iron_nugget', 'minecraft:cobblestone']).heated()
        const crimsite_nodule = 'kubejs:crimsite_nodule'
        event.recipes.createSequencedAssembly([
            'create:crimsite'
        ], 'kubejs:crimsite_node', [
            event.recipes.create.filling(crimsite_nodule, [crimsite_nodule, Fluid.of('minecraft:lava', 100)]),
            event.recipes.create.pressing(crimsite_nodule, crimsite_nodule),
            event.recipes.create.deploying(crimsite_nodule, [crimsite_nodule, 'minecraft:flint_and_steel']),
            event.recipes.create.pressing(crimsite_nodule, crimsite_nodule)
        ]).transitionalItem(crimsite_nodule).loops(1)
    //veridium
        event.smoking('2x supplementaries:ash', '#minecraft:logs_that_burn')
        event.recipes.create.mixing(['kubejs:veridium_node', CreateItem.of('kubejs:veridium_node', 0.8)], ['3x supplementaries:ash', 'createmetallurgy:dirty_copper_dust', 'minecraft:mossy_cobblestone'])
        event.recipes.create.mixing(['kubejs:veridium_node', CreateItem.of('kubejs:veridium_node', 0.3)], ['3x supplementaries:ash', 'spelunkery:raw_copper_nugget', 'minecraft:mossy_cobblestone'])
        const veridium_nodule = 'kubejs:veridium_nodule'
        event.recipes.createSequencedAssembly([
            'create:veridium'
        ], 'kubejs:veridium_node', [
            event.recipes.create.deploying(veridium_nodule, [veridium_nodule, 'minecraft:bone_meal']),
            event.recipes.create.deploying(veridium_nodule, [veridium_nodule, 'minecraft:bone_meal']),
            event.recipes.create.deploying(veridium_nodule, [veridium_nodule, 'minecraft:bone_meal']),
            event.recipes.create.pressing(veridium_nodule, veridium_nodule)
        ]).transitionalItem(veridium_nodule).loops(1)
    //bauxite
        event.recipes.create.mixing(['kubejs:bauxite_node', CreateItem.of('kubejs:bauxite_node', 0.8)], ['tfmg:bauxite_powder', 'minecraft:tuff'])
        event.recipes.create.mixing(['kubejs:bauxite_node', CreateItem.of('kubejs:bauxite_node', 0.3)], ['kubejs:raw_aluminum_nugget', 'minecraft:tuff'])

        const bauxite_nodule = 'kubejs:bauxite_nodule'
        event.recipes.createSequencedAssembly([
            'tfmg:bauxite'
        ], 'kubejs:bauxite_node', [
            event.recipes.create.filling(bauxite_nodule, [bauxite_nodule, Fluid.of('tfmg:air', 250)]),
            event.recipes.create.pressing(bauxite_nodule, bauxite_nodule)
        ]).transitionalItem(bauxite_nodule).loops(2)
    //galena
        event.recipes.create.mixing(['kubejs:galena_node', CreateItem.of('kubejs:galena_node', 0.8)], ['2x create:powdered_obsidian', 'kubejs:lead_dust', 'minecraft:cobbled_deepslate']).heated()
        event.recipes.create.mixing(['kubejs:galena_node', CreateItem.of('kubejs:galena_node', 0.3)], ['2x create:powdered_obsidian', 'spelunkery:raw_lead_nugget', 'minecraft:cobbled_deepslate']).heated()
        const galena_nodule = 'kubejs:galena_nodule'
        event.recipes.createSequencedAssembly([
            'tfmg:galena'
        ], 'kubejs:galena_node', [
            event.recipes.create.pressing(galena_nodule, galena_nodule),
            event.recipes.create.pressing(galena_nodule, galena_nodule),
            event.recipes.create.pressing(galena_nodule, galena_nodule),
            event.recipes.create.pressing(galena_nodule, galena_nodule)
        ]).transitionalItem(galena_nodule).loops(1)

//gems
    //diamond
    event.remove({ id: 'minecraft:diamond_from_smelting_diamond_ore' })
    event.remove({ id: 'minecraft:diamond_from_blasting_diamond_ore' })
    event.remove({ id: 'create:crushing/diamond_ore' })
    event.remove({ id: 'create:crushing/deepslate_diamond_ore' })
    event.recipes.create.crushing([CreateItem.of('spelunkery:rough_diamond'), CreateItem.of('spelunkery:rough_diamond', 0.5), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('natures_spirit:chert', 0.125)], 'natures_spirit:chert_diamond_ore').processingTime(350)
    //emerald
    event.remove({ id: 'minecraft:emerald_from_smelting_emerald_ore' })
    event.remove({ id: 'minecraft:emerald_from_blasting_emerald_ore' })
    event.remove({ id: 'create:crushing/emerald_ore' })
    event.remove({ id: 'create:crushing/deepslate_emerald_ore' })
    event.recipes.create.crushing([CreateItem.of('spelunkery:rough_emerald'), CreateItem.of('spelunkery:rough_emerald', 0.5), CreateItem.of('create:experience_nugget', 0.75), CreateItem.of('natures_spirit:chert', 0.125)], 'natures_spirit:chert_emerald_ore').processingTime(350)
    //lapis
    event.recipes.createdieselgenerators
    .bulk_fermenting(
        ['spelunkery:rough_lazurite', Output.of('spelunkery:rough_lazurite', 0.4), Output.of('4x spelunkery:rough_lazurite_shard', 0.4)],
                     ['spelunkery:rough_lazurite', 'spelunkery:nephrite_chunk', '2x spelunkery:raw_gold_nugget', Fluid.of('create_enchantment_industry:experience', 16)]
    )
    .processingTime(300)

//Coal
    event.remove({ id: 'create:crafting/palettes/scorchia' })
    const lignite_nodule = 'kubejs:lignite_nodule'
    event.recipes.createSequencedAssembly([
        'tfmg:lignite'
    ], 'createmetallurgy:graphite', [
        event.recipes.createFilling(lignite_nodule, [lignite_nodule, Fluid.of('minecraft:lava', 144)]),
        event.recipes.createPressing(lignite_nodule, lignite_nodule),
        event.recipes.createFilling(lignite_nodule, [lignite_nodule, Fluid.of('createmetallurgy:molten_slag', 72)]),
        event.recipes.createPressing(lignite_nodule, lignite_nodule)
    ]).transitionalItem(lignite_nodule).loops(2)

//Iron
    event.remove({ id: 'create:crushing/crimsite_recycling' })
    event.remove({ id: 'create:crushing/crimsite' })
    event.remove({ id: 'spelunkery:crushing/crimsite_recycling' })
    event.remove({ id: 'spelunkery:crushing/crimsite' })
    event.remove({ id: 'create:splashing/gravel' })
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_iron', 0.4), CreateItem.of('2x spelunkery:raw_iron_nugget', 0.4)], 'create:crimsite').processingTime(250)
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_iron', 0.4), CreateItem.of('2x spelunkery:raw_iron_nugget', 0.4)], Ingredient.of('#create:stone_types/crimsite')).processingTime(250)

//Copper
    event.remove({ id: 'create:crushing/veridium_recycling' })
    event.remove({ id: 'create:crushing/veridium' })
    event.replaceInput({ input: '#c:nuggets/copper' }, 'spelunkery:copper_nugget', 'create:copper_nugget')
    event.remove({ id: 'createbb:copper_crushing' })

//Zinc
    event.remove({ id: 'create:crushing/asurine_recycling' })
    event.remove({ id: 'create:crushing/asurine' })
    event.remove({ id: 'spelunkery:crushing/asurine_recycling' })
    event.remove({ id: 'spelunkery:crushing/asurine' })
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_zinc', 0.4), CreateItem.of('2x spelunkery:raw_zinc_nugget', 0.4)], 'create:asurine').processingTime(250)
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_zinc', 0.4), CreateItem.of('2x spelunkery:raw_zinc_nugget', 0.4)], Ingredient.of('#create:stone_types/asurine')).processingTime(250)
    event.remove({ id: 'createbb:zinc_crushing' })

//Aluminum
    event.remove({ id: 'create:crushing/bauxite' })
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_aluminum', 0.4), CreateItem.of('2x kubejs:raw_aluminum_nugget', 0.4)], 'tfmg:bauxite').processingTime(250)
    event.recipes.create.crushing(['tfmg:bauxite_powder', CreateItem.of('tfmg:bauxite_powder', 0.25)], 'create:crushed_raw_aluminum').processingTime(250)

//Gold
    event.remove({ id: 'spelunkery:crushing/ochrum_recycling' })
    event.remove({ id: 'spelunkery:crushing/ochrum' })
    event.remove({ id: 'create:splashing/red_sand' })
    event.remove({ id: 'create:splashing/soul_sand' })
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_gold', 0.4), CreateItem.of('2x spelunkery:raw_gold_nugget', 0.4)], 'create:ochrum').processingTime(250)
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_gold', 0.4), CreateItem.of('2x spelunkery:raw_gold_nugget', 0.4)], Ingredient.of('#create:stone_types/ochrum')).processingTime(250)

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
    //remove platinum crushing
    event.remove({ id: 'createpropulsion:crushing/deepslate_platinum_ore' })
    event.remove({ id: 'createpropulsion:crushing/platinum_ore' })
    event.remove({ id: 'createpropulsion:crushing/raw_platinum_block' })
    event.remove({ id: 'create:crushing/raw_platinum' })
    event.remove({ id: 'create:crushing/platinum_ore' })
    event.remove({ id: 'create:crushing/raw_platinum_block' })
    //add palladium crushing
    event.recipes.create.crushing(['create:crushed_raw_platinum', CreateItem.of('create:experience_nugget', 0.75)], 'galosphere:raw_palladium').processingTime(250)
    event.recipes.create.crushing(['9x create:crushed_raw_platinum', CreateItem.of('9x create:experience_nugget', 0.75)], 'galosphere:raw_palladium_block').processingTime(250)
    event.recipes.create.crushing(['create:crushed_raw_platinum', CreateItem.of('create:crushed_raw_platinum', 0.75), CreateItem.of('create:experience_nugget', 0.75)], Ingredient.of('#c:ores/palladium')).processingTime(250)
    //add crushed palladium smelting
    event.smelting('galosphere:palladium_ingot', 'create:crushed_raw_platinum').xp(0.1).cookingTime(200)
    event.blasting('galosphere:palladium_ingot', 'create:crushed_raw_platinum').xp(0.1).cookingTime(100)

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
    event.recipes.create.crushing(['kubejs:lead_dust', CreateItem.of('kubejs:lead_dust', 0.25)], 'create:crushed_raw_lead')
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
    foundryMelting('kubejs:lead_dust', 'oreganized:molten_lead', 90, 'heated', 40)
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
    //create metallurgy compat buckets drain
    const moltenbucketmetals = ['aluminum', 'nickel', 'silver', 'lithium', 'electrum', 'bronze', 'constantan']
    moltenbucketmetals.forEach(metal => {
        event.recipes.create.emptying([Fluid.of('createmetallurgy:molten_'+metal+''), 'minecraft:bucket'], 'createmetallurgy:molten_'+metal+'_bucket')
    })
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
    event.remove('tfmg:lead_ingot')
    event.remove('tfmg:lead_nugget')
    event.remove('tfmg:lead_block')
    event.remove('tfmg:raw_lead')
    event.remove('tfmg:raw_lead_block')
    event.remove('tfmg:lead_ore')
    event.remove('tfmg:deepslate_lead_ore')
    //spelunkery
    event.remove('spelunkery:copper_nugget')
    event.remove('spelunkery:sulfur_block')
    event.remove('spelunkery:sulfur')
    //createmetallurgy
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
    //createbb
    event.remove('createbb:crushed_copper')
    event.remove('createbb:crushed_zinc')
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
