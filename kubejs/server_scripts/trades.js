    // drug                   amount   silver
    //'nirvana:joint'         6-10,    1
    //'nirvana:weed'          32-48,   1
    //'nirvana:weed_brownie'  8-16,    1
    //'createbb:sudafed'      8-16,    2
    //'createbb:white_meth'   4-8,     2
    //'createbb:blue_meth'    4-8,     4

    MoreJS.villagerTrades(event => {
        const drugtrade = (profession, maxuses, level, product, amountmin, amountmax, silver) => {
            event.addTrade(profession, level, TradeItem.of(product, amountmin, amountmax), TradeItem.of('oreganized:silver_nugget', silver, silver))
            .transform((offer, entity, random) => {
                offer.maxUses = maxuses
                offer.demand = 1
            })
        }
        //         profession,            maxuses   lvl  product                min  max    silver
        drugtrade('minecraft:armorer',          3,  1,  'nirvana:weed_brownie',  8,   16,    1)
        drugtrade('minecraft:cartographer',     2,  3,  'createbb:sudafed',      8,   16,    2)
        drugtrade('minecraft:cleric',           1,  3,  'createbb:white_meth',   4,   8,     2)
        drugtrade('minecraft:cleric',           1,  4,  'createbb:blue_meth',    8,   16,    3)
        drugtrade('minecraft:cleric',           4,  1,  'nirvana:weed',          32,  48,    1)
        drugtrade('minecraft:farmer',           2,  2,  'nirvana:weed',          32,  48,    1)
        drugtrade('minecraft:farmer',           2,  1,  'nirvana:weed_brownie',  8,   16,    1)
        drugtrade('minecraft:fletcher',         1,  1,  'nirvana:weed',          32,  48,    1)
        drugtrade('minecraft:leatherworker',    1,  4,  'createbb:blue_meth',    4,   8,     5)
        drugtrade('minecraft:librarian',        2,  3,  'createbb:sudafed',      8,   16,    2)
        drugtrade('minecraft:librarian',        1,  1,  'nirvana:weed_brownie',  8,   16,    1)
        drugtrade('minecraft:shepherd',         2,  3,  'createbb:white_meth',   4,   8,     2)
        drugtrade('minecraft:toolsmith',        1,  3,  'createbb:sudafed',      8,   16,    2)
        drugtrade('minecraft:toolsmith',        2,  1,  'nirvana:weed_brownie',  8,   16,    1)
        drugtrade('minecraft:weaponsmith',      2,  4,  'createbb:blue_meth',    4,   8,     4)
})