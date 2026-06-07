ServerEvents.recipes(event => {
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
})
