function game(switch_method) {
    const doors = Array.from('GGC').sort(() => Math.random() - 0.5)
    const pick_index = Math.floor(Math.random() * doors.length)
    const show_index = doors.findIndex((d, i) => d == 'G' && i != pick_index)
    const last_door_index = doors.findIndex((_, i) => ![pick_index, show_index].includes(i))
    const decided_to_switch = switch_method()
    const final_pick_index = decided_to_switch ? last_door_index : pick_index
    const win = doors[final_pick_index] == 'C'
    return win * 1
}

function test_strategy(test_count, switch_method) {
    let win_rate = Array(test_count).fill(0).reduce((a) => a + game(switch_method), 0)
    return win_rate / test_count
}

const test_count = parseInt(process.argv[2] ?? 1000000)

console.log('RAND   :', test_strategy(test_count, () => Math.random() >= 0.5))
console.log('STAY   :', test_strategy(test_count, () => false))
console.log('SWITCH :', test_strategy(test_count, () => true))