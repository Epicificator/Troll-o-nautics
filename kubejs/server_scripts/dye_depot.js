const dyeDepot = [ 'maroon', 'rose', 'coral', 'indigo', 'navy', 'slate', 'olive', 'amber', 'beige', 'teal', 'mint', 'aqua', 'verdant', 'forest', 'ginger', 'tan']

ServerEvents.recipes(event => {
    const depotRecipes = (item1,item2,tag) => {
        dyeDepot.forEach(dye => {
            event.shapeless(item1+dye+item2,[`#c:dyes/${dye}`, Ingredient.of(tag)])
        })
    }

    depotRecipes('bits_n_bobs:','_chair','#bits_n_bobs:chairs')
    depotRecipes('createmetallurgy:','_light_bulb','#createmetallurgy:light_bulb')
    depotRecipes('electroenergetics:','_electric_motor','#electroenergetics:electric_motors')

    dyeDepot.forEach(dye => {
        event.shapeless(`bits_n_bobs:${dye}_chair`,[`dye_depot:${dye}_wool`, Ingredient.of('#minecraft:wooden_stairs')])
    })
    dyeDepot.forEach(dye => {
        event.shaped(`createmetallurgy:${dye}_light_bulb`, ['a','b','c'], { a: `dye_depot:${dye}_stained_glass`, b: 'createmetallurgy:tungsten_wire_spool', c: 'create:iron_sheet'})
    })
    dyeDepot.forEach(dye => {
        event.shaped(`electroenergetics:${dye}_electric_motor`, ['ab ','cdx','ab '], { a: 'electroenergetics:connector', b: 'electroenergetics:copper_wire_spool', c: 'electroenergetics:commutator', d: 'create:andesite_alloy_block', x: `dye_depot:${dye}_dye`})
    })
})

ServerEvents.tags('item', event => {
    const dyeTags = (item1,item2,tag) => {
        dyeDepot.forEach(dye => {
            event.add(tag, item1+dye+item2)
        })
    }

    dyeTags('bits_n_bobs:','_chair','bits_n_bobs:chairs')
    dyeTags('bits_n_bobs:','_chair','minecraft:mineable/axe')

    dyeTags('createmetallurgy:','_light_bulb','createmetallurgy:light_bulb')
    dyeTags('createmetallurgy:','_light_bulb','minecraft:mineable/axe')
    dyeTags('createmetallurgy:','_light_bulb','minecraft:mineable/pickaxe')
    dyeTags('createmetallurgy:','_light_bulb','oreganized:silktouch_using_scribe')
    dyeTags('createmetallurgy:','_light_bulb','spelunkery:chiselable')
    
    dyeTags('electroenergetics:','_electric_motor','create:safe_nbt')
    dyeTags('electroenergetics:','_electric_motor','electroenergetics:electric_motors')
    dyeTags('electroenergetics:','_electric_motor','electroenergetics:train_electric_motor')
    dyeTags('electroenergetics:','_electric_motor','minecraft:mineable/pickaxe')
    dyeTags('electroenergetics:','_electric_motor','oreganized:silktouch_using_scribe')
    dyeTags('electroenergetics:','_electric_motor','spelunkery:chiselable')

    event.add('dndecor:industrial_cogwheels', 'gnkinetics:industrial_gear')
    event.add('dndecor:large_industrial_cogwheel', 'gnkinetics:large_industrial_gear')
})