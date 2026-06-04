ServerEvents.recipes(event => {
    event.remove({ id: 'aeronautics_utility_objects:brass_universal_joint' })
    event.remove({ id: 'aeronautics_utility_objects:universal_joint_rod' })
    event.remove({ id: 'aeronautics_utility_objects:universal_joint_rod2' })
    event.remove({ id: 'aeronautics_utility_objects:damping_stress_bearing' })
})

RecipeViewerEvents.removeEntries('item', event => {
    event.remove('aeronautics_utility_objects:brass_universal_joint')
    event.remove('aeronautics_utility_objects:universal_joint_rod')
    event.remove('aeronautics_utility_objects:universal_joint_rod2')
    event.remove('aeronautics_utility_objects:damping_stress_bearing')
})