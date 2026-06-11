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


})

RecipeViewerEvents.removeEntries("item",event => {
    event.remove(/^sgjourney:naquadah.*/)
    event.remove(/^sgjourney:jaffa.*/)
    event.remove(/^sgjourney:system_lord.*/)
})