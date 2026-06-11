// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
    event.smelting('spelunkery:charcoal_lump', 'minecraft:stick')
    event.blasting('spelunkery:charcoal_lump', 'minecraft:stick')
    event.campfireCooking('minecraft:torch', 'minecraft:stick', 0.1, 120)
})
