ServerEvents.recipes(event => {
//grapplemod
    event.remove({ mod: 'grapplemod' })
    event.shapeless(
        Item.of('grapplemod:grappling_hook', 1),
                    ['minecraft:iron_pickaxe', '4x #c:ropes'])
//tfmg
    event.remove({ id: 'tfmg:crafting/materials/steel_sword' })
    event.remove({ id: 'tfmg:crafting/materials/steel_pickaxe' })
    event.remove({ id: 'tfmg:crafting/materials/steel_axe' })
    event.remove({ id: 'tfmg:crafting/materials/steel_shovel' })
    event.remove({ id: 'tfmg:crafting/materials/steel_hoe' })
    event.remove({ id: 'tfmg:crafting/materials/aluminum_sword' })
    event.remove({ id: 'tfmg:crafting/materials/aluminum_pickaxe' })
    event.remove({ id: 'tfmg:crafting/materials/aluminum_axe' })
    event.remove({ id: 'tfmg:crafting/materials/aluminum_shovel' })
    event.remove({ id: 'tfmg:crafting/materials/aluminum_hoe' })
})

RecipeViewerEvents.removeEntries('item', event => {
//grapplemod
    event.remove('grapplemod:ender_staff')
    event.remove('grapplemod:forcefield')
    event.remove('grapplemod:rocket')
    event.remove('grapplemod:base_upgrade')
    event.remove('grapplemod:long_fall_boots')
    event.remove('grapplemod:long_fall_boots_smithing_template')
//tfmg
    event.remove('tfmg:steel_sword')
    event.remove('tfmg:steel_pickaxe')
    event.remove('tfmg:steel_axe')
    event.remove('tfmg:steel_shovel')
    event.remove('tfmg:steel_hoe')
    event.remove('tfmg:aluminum_sword')
    event.remove('tfmg:aluminum_pickaxe')
    event.remove('tfmg:aluminum_axe')
    event.remove('tfmg:aluminum_shovel')
    event.remove('tfmg:aluminum_hoe')
})
