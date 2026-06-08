ServerEvents.recipes(event => {
//oil unification
    event.remove({ id: 'createdieselgenerators:distillation/crude_oil' })
    event.replaceInput({ id: 'createdieselgenerators:crafting/asphalt_block' }, 'createdieselgenerators:crude_oil_bucket',  'tfmg:crude_oil_bucket')

    event.remove({ id: 'createdieselgenerators:distillation/crude_oil' })
    event.recipes.createdieselgenerators
    .distillation([
        Fluid.of("tfmg:diesel", 45),
        Fluid.of("tfmg:gasoline", 35),
        ],
        Fluid.of("tfmg:crude_oil", 100))
    .processingTime(60)
    .heated();
    event.remove({ id: 'createdieselgenerators:distillation/superheated_crude_oil' })
    event.recipes.createdieselgenerators
    .distillation([
        Fluid.of("tfmg:diesel", 25),
        Fluid.of("tfmg:gasoline", 55),
        ],
        Fluid.of("tfmg:crude_oil", 100))
    .processingTime(40)
    .superheated();
//pumpjack
    event.remove({ id: 'tfmg:crafting/materials/pumpjack_hammer' })
    event.remove({ id: 'tfmg:crafting/materials/pumpjack_crank' })
    event.remove({ id: 'tfmg:crafting/materials/pumpjack_base' })
    event.remove({ id: 'tfmg:pumpjack_hammer_part_from_storage_blocks_steel_stonecutting' })
    event.remove({ id: 'tfmg:crafting/materials/pumpjack_hammer_head' })
    event.remove({ id: 'tfmg:crafting/materials/pumpjack_hammer_connector' })
    event.remove({ id: 'tfmg:large_pumpjack_hammer_part_from_storage_blocks_steel_stonecutting' })
    event.remove({ id: 'tfmg:crafting/materials/large_pumpjack_hammer_head' })
    event.remove({ id: 'tfmg:crafting/materials/large_pumpjack_hammer_connector' })
    event.replaceInput({ id: 'createdieselgenerators:crafting/pumpjack_bearing' }, 'create:zinc_ingot',  'create:brass_ingot')
    event.replaceInput({ id: 'createdieselgenerators:crafting/pumpjack_head' }, 'create:zinc_ingot',  'create:brass_ingot')
    event.remove({ id: 'createdieselgenerators:mechanical_crafting/pumpjack_crank' })
    event.recipes.create.mechanical_crafting('createdieselgenerators:pumpjack_crank', [
        ' aba ',
        '  c  ',
        ' aba ',
        ' dcd ',
        ' ada '
    ], { a: 'create:andesite_alloy', b: 'create:iron_sheet', c: 'create:shaft', d: 'create:brass_ingot' })

})

RecipeViewerEvents.removeEntries('fluid', event => {
    event.remove('createdieselgenerators:crude_oil')
    event.remove('createdieselgenerators:gasoline')
    event.remove('createdieselgenerators:diesel')
})
RecipeViewerEvents.removeEntries('item', event => {
    event.remove('createdieselgenerators:crude_oil_bucket')
    event.remove('createdieselgenerators:gasoline_bucket')
    event.remove('createdieselgenerators:diesel_bucket')
    event.remove('tfmg:pumpjack_hammer')
    event.remove('tfmg:pumpjack_crank')
    event.remove('tfmg:pumpjack_base')
    event.remove('tfmg:pumpjack_hammer_part')
    event.remove('tfmg:pumpjack_hammer_head')
    event.remove('tfmg:pumpjack_hammer_connector')
    event.remove('tfmg:large_pumpjack_hammer_part')
    event.remove('tfmg:large_pumpjack_hammer_head')
    event.remove('tfmg:large_pumpjack_hammer_connector')
})
