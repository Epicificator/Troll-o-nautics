ServerEvents.tags('item', event => {
    event.add('spelunkery:coal_ores', 'natures_spirit:chert_coal_ore')
    event.add('spelunkery:iron_ores', 'natures_spirit:chert_iron_ore')
    event.add('spelunkery:copper_ores', 'natures_spirit:chert_copper_ore')
    event.add('spelunkery:gold_ores', 'natures_spirit:chert_gold_ore')
    event.add('spelunkery:diamond_ores', 'natures_spirit:chert_diamond_ore')
    event.add('spelunkery:emerald_ores', 'natures_spirit:chert_emerald_ore')
    event.add('spelunkery:lapis_ores', 'natures_spirit:chert_lapis_ore')
    event.add('spelunkery:redstone_ores', 'natures_spirit:chert_redstone_ore')
    event.add('spelunkery:lead_ores', 'oreganized:lead_ore')
    event.add('spelunkery:lead_ores', 'oreganized:deepslate_lead_ore')
    event.add('spelunkery:silver_ores', 'oreganized:silver_ore')
    event.add('spelunkery:silver_ores', 'oreganized:deepslate_silver_ore')
})
ServerEvents.recipes(event => {
    const variantCrushing = (out1, out2, out2chance, stone, oreblock, time) => {
        event.recipes.create.crushing(
            [CreateItem.of(out1),
                                      CreateItem.of(out2, out2chance),
                                      CreateItem.of('create:experience_nugget', 0.75),
                                      CreateItem.of(stone, 0.125)],
                                      oreblock).processingTime(time)
    }
    const variantCrushingGold = (out1, out2, out2chance, stone, oreblock, time) => {
        event.recipes.create.crushing(
            [CreateItem.of(out1),
                                      CreateItem.of(out2, out2chance),
                                      CreateItem.of('2x create:experience_nugget', 0.75),
                                      CreateItem.of(stone, 0.125)],
                                      oreblock).processingTime(time)
    }
    const dpsl = 'minecraft:cobbled_deepslate'
    const cbls = 'minecraft:cobblestone'
    const ande = 'minecraft:andesite'
    const dior = 'minecraft:diorite'
    const gran = 'minecraft:granite'
    const tuff = 'minecraft:tuff'
    const chrt = 'natures_spirit:chert'
    const coal = 'minecraft:coal'
    //variantCrushing('2x '+coal+'',      coal,       0.25,   dpsl,   'minecraft:deepslate_coal_ore',         300)
    //variantCrushing('1x '+coal+'',      coal,       0.75,   cbls,   'minecraft:coal_ore',                   150)
    variantCrushing('1x '+coal+'',      coal,       0.75,   ande,   'spelunkery:andesite_coal_ore',         150)
    variantCrushing('1x '+coal+'',      coal,       0.75,   dior,   'spelunkery:diorite_coal_ore',          150)
    variantCrushing('1x '+coal+'',      coal,       0.75,   gran,   'spelunkery:granite_coal_ore',          150)
    variantCrushing('1x '+coal+'',      coal,       0.75,   tuff,   'spelunkery:tuff_coal_ore',             150)
    variantCrushing('1x '+coal+'',      coal,       0.75,   chrt,   'natures_spirit:chert_coal_ore',        150)
    const crushIrn = 'create:crushed_raw_iron'
    //variantCrushing('2x '+crushIrn+'',  crushIrn,   0.25,   dpsl,   'minecraft:deepslate_iron_ore',         350)
    //variantCrushing('1x '+crushIrn+'',  crushIrn,   0.75,   cbls,   'minecraft:iron_ore',                   250)
    variantCrushing('1x '+crushIrn+'',  crushIrn,   0.75,   ande,   'spelunkery:andesite_iron_ore',         250)
    variantCrushing('1x '+crushIrn+'',  crushIrn,   0.75,   dior,   'spelunkery:diorite_iron_ore',          250)
    variantCrushing('1x '+crushIrn+'',  crushIrn,   0.75,   gran,   'spelunkery:granite_iron_ore',          250)
    variantCrushing('1x '+crushIrn+'',  crushIrn,   0.75,   tuff,   'spelunkery:tuff_iron_ore',             250)
    variantCrushing('1x '+crushIrn+'',  crushIrn,   0.75,   chrt,   'natures_spirit:chert_iron_ore',        250)
    const crushCpr = 'create:crushed_raw_copper'
    //variantCrushing('7x '+crushCpr+'',  crushCpr,   0.25,   dpsl,   'minecraft:deepslate_copper_ore',       350)
    //variantCrushing('5x '+crushCpr+'',  crushCpr,   0.25,   cbls,   'minecraft:copper_ore',                 250)
    variantCrushing('5x '+crushCpr+'',  crushCpr,   0.25,   ande,   'spelunkery:andesite_copper_ore',       250)
    variantCrushing('5x '+crushCpr+'',  crushCpr,   0.25,   dior,   'spelunkery:diorite_copper_ore',        250)
    variantCrushing('5x '+crushCpr+'',  crushCpr,   0.25,   gran,   'spelunkery:granite_copper_ore',        250)
    variantCrushing('5x '+crushCpr+'',  crushCpr,   0.25,   tuff,   'spelunkery:tuff_copper_ore',           250)
    variantCrushing('5x '+crushCpr+'',  crushCpr,   0.25,   chrt,   'natures_spirit:chert_copper_ore',      250)
    const crushGld = 'create:crushed_raw_gold'
    //variantCrushingGold('2x '+crushGld+'',  crushGld,   0.25,   dpsl,   'minecraft:deepslate_gold_ore',         350)
    //variantCrushingGold('1x '+crushGld+'',  crushGld,   0.75,   cbls,   'minecraft:gold_ore',                   250)
    variantCrushingGold('1x '+crushGld+'',  crushGld,   0.75,   ande,   'spelunkery:andesite_gold_ore',         250)
    variantCrushingGold('1x '+crushGld+'',  crushGld,   0.75,   dior,   'spelunkery:diorite_gold_ore',          250)
    variantCrushingGold('1x '+crushGld+'',  crushGld,   0.75,   gran,   'spelunkery:granite_gold_ore',          250)
    variantCrushingGold('1x '+crushGld+'',  crushGld,   0.75,   tuff,   'spelunkery:tuff_gold_ore',             250)
    variantCrushingGold('1x '+crushGld+'',  crushGld,   0.75,   chrt,   'natures_spirit:chert_gold_ore',        250)
    const roughEmr = 'spelunkery:rough_emerald'
    //variantCrushing('2x '+roughEmr+'',  roughEmr,   0.25,   dpsl,   'minecraft:deepslate_emerald_ore',      450)
    //variantCrushing('1x '+roughEmr+'',  roughEmr,   0.75,   cbls,   'minecraft:emerald_ore',                350)
    //variantCrushing('1x '+roughEmr+'',  roughEmr,   0.75,   ande,   'spelunkery:andesite_emerald_ore',      350)
    //variantCrushing('1x '+roughEmr+'',  roughEmr,   0.75,   dior,   'spelunkery:diorite_emerald_ore',       350)
    //variantCrushing('1x '+roughEmr+'',  roughEmr,   0.75,   gran,   'spelunkery:granite_emerald_ore',       350)
    //variantCrushing('8x '+roughEmr+'',  roughEmr,   0.75,   tuff,   'spelunkery:tuff_emerald_ore',          350)
    variantCrushing('1x '+roughEmr+'',  roughEmr,   0.75,   chrt,   'natures_spirit:chert_emerald_ore',     350)
    const roughDia = 'spelunkery:rough_diamond'
    //variantCrushing('2x '+roughDia+'',  roughDia,   0.25,   dpsl,   'minecraft:deepslate_diamond_ore',      450)
    //variantCrushing('1x '+roughDia+'',  roughDia,   0.75,   cbls,   'minecraft:diamond_ore',                350)
    //variantCrushing('2x '+roughDia+'',  roughDia,   0.50,   ande,   'spelunkery:andesite_diamond_ore',      350)
    //variantCrushing('1x '+roughDia+'',  roughDia,   0.50,   dior,   'spelunkery:diorite_diamond_ore',       350)
    //variantCrushing('1x '+roughDia+'',  roughDia,   0.50,   gran,   'spelunkery:granite_diamond_ore',       350)
    //variantCrushing('2x '+roughDia+'',  roughDia,   0.75,   tuff,   'spelunkery:tuff_diamond_ore',          350)
    variantCrushing('1x '+roughDia+'',  roughDia,   0.75,   chrt,   'natures_spirit:chert_diamond_ore',     350)
    //variantCrushing('2x '+roughDia+'',  roughDia,   0.25,   'minecraft:basalt',     'spelunkery:smooth_basalt_diamond_ore', 350)
    const roughLaz = 'spelunkery:rough_lazurite'
    //variantCrushing('4x '+roughLaz+'',  roughLaz,   0.50,   dpsl,   'minecraft:deepslate_lapis_ore',        350)
    //variantCrushing('3x '+roughLaz+'',  roughLaz,   0.50,   cbls,   'minecraft:lapis_ore',                  250)
    //variantCrushing('2x '+roughLaz+'',  roughLaz,   0.75,   ande,   'spelunkery:andesite_lapis_ore',        250)
    //variantCrushing('2x '+roughLaz+'',  roughLaz,   0.75,   dior,   'spelunkery:diorite_lapis_ore',         250)
    //variantCrushing('3x '+roughLaz+'',  roughLaz,   0.50,   gran,   'spelunkery:granite_lapis_ore',         250)
    //variantCrushing('4x '+roughLaz+'',  roughLaz,   0.50,   tuff,   'spelunkery:tuff_lapis_ore',            250)
    variantCrushing('2x '+roughLaz+'',  roughLaz,   0.50,   chrt,   'natures_spirit:chert_lapis_ore',       250)
    //variantCrushing('3x '+roughLaz+'',  roughLaz,   0.50,   'minecraft:sandstone',  'spelunkery:sandstone_lapis_ore',       250)
    const roughCin = 'spelunkery:rough_cinnabar'
    const redstone = 'minecraft:redstone'
    //variantCrushing('3x '+roughCin+'',  redstone,   0.50,   dpsl,   'minecraft:deepslate_redstone_ore',     350)
    //variantCrushing('2x '+roughCin+'',  redstone,   0.50,   cbls,   'minecraft:redstone_ore',               250)
    variantCrushing('2x '+roughCin+'',  redstone,   0.75,   ande,   'spelunkery:andesite_redstone_ore',     250)
    variantCrushing('2x '+roughCin+'',  redstone,   0.25,   dior,   'spelunkery:diorite_redstone_ore',      250)
    variantCrushing('3x '+roughCin+'',  redstone,   0.75,   gran,   'spelunkery:granite_redstone_ore',      250)
    variantCrushing('3x '+roughCin+'',  redstone,   0.75,   tuff,   'spelunkery:tuff_redstone_ore',         250)
    variantCrushing('2x '+roughCin+'',  redstone,   0.50,   chrt,   'natures_spirit:chert_redstone_ore',    250)
    //variantCrushing('3x '+roughCin+'',  redstone,   0.50,   'minecraft:calcite',    'spelunkery:calcite_redstone_ore',      250)
    const crushLed = 'create:crushed_raw_lead'
    variantCrushing('2x '+crushLed+'',  crushLed,   0.25,   dpsl,   'oreganized:deepslate_lead_ore',         350)
    variantCrushing('1x '+crushLed+'',  crushLed,   0.75,   cbls,   'oreganized:lead_ore',                   250)
    variantCrushing('1x '+crushLed+'',  crushLed,   0.75,   ande,   'spelunkery:andesite_lead_ore',         250)
    variantCrushing('1x '+crushLed+'',  crushLed,   0.75,   dior,   'spelunkery:diorite_lead_ore',          250)
    variantCrushing('1x '+crushLed+'',  crushLed,   0.75,   gran,   'spelunkery:granite_lead_ore',          250)
    variantCrushing('1x '+crushLed+'',  crushLed,   0.75,   tuff,   'spelunkery:tuff_lead_ore',             250)
    const crushSlv = 'create:crushed_raw_silver'
    variantCrushing('2x '+crushSlv+'',  crushSlv,   0.25,   dpsl,   'oreganized:deepslate_silver_ore',       500)
    variantCrushing('1x '+crushSlv+'',  crushSlv,   0.75,   cbls,   'oreganized:silver_ore',                 400)
    variantCrushing('1x '+crushSlv+'',  crushSlv,   0.75,   ande,   'spelunkery:andesite_silver_ore',       400)
    variantCrushing('1x '+crushSlv+'',  crushSlv,   0.75,   dior,   'spelunkery:diorite_silver_ore',        400)
    variantCrushing('1x '+crushSlv+'',  crushSlv,   0.75,   gran,   'spelunkery:granite_silver_ore',        400)
    variantCrushing('1x '+crushSlv+'',  crushSlv,   0.75,   tuff,   'spelunkery:tuff_silver_ore',           400)
    const crushZnc = 'create:crushed_raw_zinc'
    //variantCrushing('2x '+crushZnc+'',  crushZnc,   0.25,   dpsl,   'create:deepslate_zinc_ore',         350)
    //variantCrushing('1x '+crushZnc+'',  crushZnc,   0.75,   cbls,   'create:zinc_ore',                   250)
    variantCrushing('1x '+crushZnc+'',  crushZnc,   0.75,   ande,   'spelunkery:andesite_zinc_ore',         250)
    variantCrushing('1x '+crushZnc+'',  crushZnc,   0.75,   dior,   'spelunkery:diorite_zinc_ore',          250)
    variantCrushing('1x '+crushZnc+'',  crushZnc,   0.75,   gran,   'spelunkery:granite_zinc_ore',          250)
    variantCrushing('1x '+crushZnc+'',  crushZnc,   0.75,   tuff,   'spelunkery:tuff_zinc_ore',             250)
    const crushPal = 'create:crushed_raw_platinum'
    variantCrushing('2x '+crushPal+'',  crushPal,   0.25,   dpsl,   'galosphere:deepslate_palladium_ore',    350)
    variantCrushing('1x '+crushPal+'',  crushPal,   0.75,   cbls,   'galosphere:palladium_ore',              250)
    //remove redundant smelting blasting
    const oresmelt = [['coal', 'coal'], ['iron_ingot', 'iron'], ['copper_ingot', 'copper'], ['gold_ingot', 'gold'], ['emerald', 'emerald'], ['diamond', 'diamond'], ['lapis_lazuli', 'lapis'], ['redstone', 'redstone']]
    oresmelt.forEach(pair => {
        const item = pair[0]
        const block = pair[1]
        event.remove({ id: 'minecraft:'+item+'_from_smelting_'+block+'_ore' })
        event.remove({ id: 'minecraft:'+item+'_from_blasting_'+block+'_ore' })
        event.remove({ id: 'minecraft:'+item+'_from_smelting_deepslate_'+block+'_ore' })
        event.remove({ id: 'minecraft:'+item+'_from_blasting_deepslate_'+block+'_ore' })
    })
    event.remove({ id: 'create:zinc_ore_smelting' })
    event.remove({ id: 'create:zinc_ore_blasting' })
    event.remove({ id: 'oreganized:smelt_lead_ore' })
    event.remove({ id: 'oreganized:blast_lead_ore' })
    event.remove({ id: 'oreganized:smelt_deepslate_lead_ore' })
    event.remove({ id: 'oreganized:blast_deepslate_lead_ore' })
    event.remove({ id: 'oreganized:smelt_silver_ore' })
    event.remove({ id: 'oreganized:blast_silver_ore' })
    event.remove({ id: 'oreganized:smelt_deepslate_silver_ore' })
    event.remove({ id: 'oreganized:blast_deepslate_silver_ore' })
    //remove crushing
    event.remove({ id: 'create:crushing/nether_gold_ore' })
    event.remove({ id: 'create:crushing/lapis_ore' })
    event.remove({ id: 'create:crushing/deepslate_lapis_ore' })
    event.remove({ id: 'create:crushing/redstone_ore' })
    event.remove({ id: 'create:crushing/deepslate_redstone_ore' })
    event.remove({ id: 'spelunkery:crushing/andesite_redstone_ore' })
    event.remove({ id: 'spelunkery:crushing/diorite_redstone_ore' })
    event.remove({ id: 'spelunkery:crushing/granite_redstone_ore' })
    event.remove({ id: 'spelunkery:crushing/tuff_redstone_ore' })
    event.remove({ id: 'create:crushing/silver_ore' })
    event.remove({ id: 'create:crushing/diamond_ore' })
    event.remove({ id: 'create:crushing/deepslate_diamond_ore' })
    event.remove({ id: 'create:crushing/emerald_ore' })
    event.remove({ id: 'create:crushing/deepslate_emerald_ore' })
})