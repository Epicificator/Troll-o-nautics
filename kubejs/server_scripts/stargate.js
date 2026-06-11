ServerEvents.recipes(event => {
    event.remove({ mod: 'sgjourney' })
    event.remove({ mod: 'moregate' })
    event.shaped( 'sgjourney:universe_stargate_chevron',
                  [ 'bcb', ' a ' ],
                  { a: 'abyssal_decor:industrial_lever', b: 'oreganized:silver_nugget', c: 'powergrid:light_bulb'})
    event.recipes.createMechanicalCrafting('sgjourney:classic_stargate', [
        ' aaa ',
        'ab ba',
        'c   c',
        'ab ba',
        ' ada '
    ], {a: 'sgjourney:universe_stargate_chevron',
        b: 'oreganized:silver_block',
        c: 'architects_palette:ender_pearl_block',
        d: 'powergrid:transformer_core' })

    event.shaped( 'sgjourney:basic_interface',
        [ 'aba', 'cdc', 'aea' ],
        { a: 'powergrid:transformer_core', b: 'minecraft:diamond', c: 'minecraft:ender_pearl', d: 'ccbr:basic_integrated_circuit', e: 'minecraft:redstone' })
    event.shaped( 'sgjourney:crystal_interface',
        [ 'aba', 'cdc', 'efe' ],
        { a: 'tfmg:heavy_machinery_casing', b: 'tfmg:voltage_observer', c: 'tfmg:steel_mechanism', d: 'minecraft:netherite_scrap', e: 'tfmg:machine_input' , f: 'tfmg:electrical_switch'})
    event.shaped( 'sgjourney:advanced_crystal_interface',
        [ 'aba', 'cdc', 'efe' ],
        { a: 'tfmg:heavy_machinery_casing', b: 'minecraft:netherite_ingot', c: 'darkerdepths:crystal_melon', d: 'tfmg:generator', e: 'tfmg:machine_input' , f: 'tfmg:electrical_switch'})

    const dhd = (output, eye) => {
        event.recipes.createMechanicalCrafting(Item.of('sgjourney:'+output+'_dhd[minecraft:block_entity_data={id:"sgjourney:'+output+'_dhd",crystal_inventory:{Items:[{Slot:0,id:"sgjourney:large_control_crystal",count:1}]}}]'), [
            'aba',
            'ccc',
            'ded',
            'fgf'
        ], {a: 'tfmg:heavy_machinery_casing',
            b: eye,
            c: 'tfmg:stator',
            d: 'enderscape:nebulite',
            e: 'tfmg:rotor',
            f: 'minecraft:netherite_ingot',
            g: 'tfmg:machine_input' })
    }
    dhd('milky_way', 'endrem:lost_eye')
    dhd('pegasus', 'endrem:fishing_eye')
    dhd('classic', 'endrem:trial_eye')

    event.stonecutting(Item.of('sgjourney:stargate_upgrade_crystal[sgjourney:stargate_upgrade="sgjourney:milky_way_stargate"]'), 'minecraft:ender_pearl')
    event.stonecutting(Item.of('sgjourney:stargate_upgrade_crystal[sgjourney:stargate_upgrade="sgjourney:universe_stargate"]'), 'minecraft:ender_pearl')
    event.stonecutting(Item.of('sgjourney:stargate_upgrade_crystal[sgjourney:stargate_upgrade="sgjourney:pegasus_stargate"]'), 'minecraft:ender_pearl')
    event.stonecutting(Item.of('sgjourney:stargate_upgrade_crystal[sgjourney:stargate_upgrade="sgjourney:tollan_stargate"]'), 'minecraft:ender_pearl')

    event.stonecutting('sgjourney:stargate_variant_crystal','spelunkery:cinnabar_shard')

    const variants = ['aether','ancient','andromeda','apex','bloodgate','brass','copper','crafter',
        'create','create_mw','dark_ascension','doom','electikosian_gate','end','flesh_gate','forerunner',
        'forest_gate','galifrey','galifrey_pg','horizon','industrial','jumpgate','jungle_gate','makeshift',
        'mossy','nether','nox','ori','quantum','quartz_gate','quartz_u','retrogate','silence','spatial',
        'streamline','t_end','twilight','universe_mk2','universe_mk3','warpgate','warpgate_u']

    variants.forEach(variant => {
        event.stonecutting(Item.of('sgjourney:stargate_variant_crystal[sgjourney:stargate_variant="moregate:'+variant+'"]'), 'sgjourney:stargate_variant_crystal')
    })

    event.stonecutting(Item.of('sgjourney:stargate_variant_crystal[sgjourney:stargate_variant="sgjourney:classic_milky_way"]'), 'sgjourney:stargate_variant_crystal')
    event.stonecutting(Item.of('sgjourney:stargate_variant_crystal[sgjourney:stargate_variant="sgjourney:milky_way_movie"]'), 'sgjourney:stargate_variant_crystal')
    event.stonecutting(Item.of('sgjourney:stargate_variant_crystal[sgjourney:stargate_variant="sgjourney:milky_way_promo"]'), 'sgjourney:stargate_variant_crystal')
    event.stonecutting(Item.of('sgjourney:stargate_variant_crystal[sgjourney:stargate_variant="sgjourney:classic_milky_way"]'), 'sgjourney:stargate_variant_crystal')
    event.stonecutting(Item.of('sgjourney:stargate_variant_crystal[sgjourney:stargate_variant="sgjourney:milky_way_sg-1"]'), 'sgjourney:stargate_variant_crystal')
    event.stonecutting(Item.of('sgjourney:stargate_variant_crystal[sgjourney:stargate_variant="sgjourney:pegasus_atlantis"]'), 'sgjourney:stargate_variant_crystal')

    event.shaped('sgjourney:gdo', [
        'ab', 'ca'
    ], { a: 'create:iron_sheet', b: 'create:transmitter' , c: 'powergrid:electrical_gizmo'})
    
    event.shaped('sgjourney:transceiver', [
        'ab', 'cd', 'ab'
    ], { a: 'create:iron_sheet', b: 'create:copper_sheet' , c: 'ccbr:integrated_circuit', d: 'create:transmitter'})

    event.shaped( 'sgjourney:stargate_shielding_ring',
        [ 'aba', 'b b', 'aba' ],
        { a: 'minecraft:iron_nugget', b: 'minecraft:iron_ingot' })
    
    const iris = (output, mat) => {
        event.shaped('sgjourney:'+output+'_iris', [
            'aba', 'bcb', 'aba'
        ], { a: mat+'_ingot', b: mat+'_block' , c: 'sgjourney:stargate_shielding_ring'})
    }
    iris('copper','minecraft:copper')
    iris('iron','minecraft:iron')
    iris('golden','minecraft:gold')
    iris('bronze','create:brass')
    iris('steel', 'tfmg:steel')
    
    event.shaped('sgjourney:diamond_iris', [
        'aba', 'bcb', 'aba'
    ], { a: 'minecraft:diamond', b: 'minecraft:diamond_block' , c: 'sgjourney:stargate_shielding_ring'})

    event.smithing(
        'sgjourney:netherite_iris',
        'minecraft:netherite_upgrade_smithing_template',
        'sgjourney:diamond_iris',
        'descendants_weaponry:reinforced_netherite_ingot'
    )

})

RecipeViewerEvents.removeEntries("item",event => {
    event.remove(/^sgjourney:.*/)
})
// RecipeViewerEvents.removeEntries("entity", event => {
//     event.remove(/^sgjourney:.*/)
// })
RecipeViewerEvents.removeEntries("fluid",event => {
    event.remove(/^sgjourney:.*/)
})
RecipeViewerEvents.addEntries("item",event => {
    event.add('sgjourney:classic_stargate')
    event.add('sgjourney:universe_stargate_chevron')
    event.add('sgjourney:basic_interface')
    event.add('sgjourney:crystal_interface')
    event.add('sgjourney:advanced_crystal_interface')
    event.add(Item.of('sgjourney:stargate_upgrade_crystal[sgjourney:stargate_upgrade="sgjourney:milky_way_stargate"]'))
    event.add(Item.of('sgjourney:stargate_upgrade_crystal[sgjourney:stargate_upgrade="sgjourney:pegasus_stargate"]'))
    event.add(Item.of('sgjourney:stargate_upgrade_crystal[sgjourney:stargate_upgrade="sgjourney:universe_stargate"]'))
    event.add(Item.of('sgjourney:stargate_upgrade_crystal[sgjourney:stargate_upgrade="sgjourney:tollan_stargate"]'))
    event.add('sgjourney:stargate_variant_crystal')
    event.add('sgjourney:milky_way_dhd')
    event.add('sgjourney:pegasus_dhd')
    event.add('sgjourney:classic_dhd')
    event.add('sgjourney:stargate_shielding_ring')
    event.add('sgjourney:copper_iris')
    event.add('sgjourney:iron_iris')
    event.add('sgjourney:golden_iris')
    event.add('sgjourney:diamond_iris')
    event.add('sgjourney:steel_iris')
    event.add('sgjourney:bronze_iris')
    event.add('sgjourney:netherite_iris')
    event.add('sgjourney:universe_stargate')
    event.add('sgjourney:milky_way_stargate')
    event.add('sgjourney:pegasus_stargate')
    event.add('sgjourney:tollan_stargate')
    event.add('sgjourney:transceiver')
    event.add('sgjourney:gdo')
})