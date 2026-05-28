ServerEvents.recipes(event => {
    event.remove({ mod: 'grapplemod' })
    event.shapeless(
        Item.of('grapplemod:grappling_hook', 1),
       ['minecraft:iron_pickaxe', '4x #c:ropes'])
})
RecipeViewerEvents.removeEntries('item', event => {
    event.remove('grapplemod:ender_staff')
    event.remove('grapplemod:forcefield')
    event.remove('grapplemod:rocket')
    event.remove('grapplemod:base_upgrade')
    event.remove('grapplemod:long_fall_boots')
    event.remove('grapplemod:long_fall_boots_smithing_template')
})
