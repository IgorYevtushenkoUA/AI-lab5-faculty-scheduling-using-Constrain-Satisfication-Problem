let map = new Map()

map.set(1,[11,21,31,41,51])
map.set(2,[12,22,32,42,52])
map.set(3,[13,23,33,42,53])

for (let item of map){
    for (let j = 0; j < item[1].length; j++) {
        if (item[1][j] %2 === 0) {
            item[1] = item[1].filter(value => value %2 !== 0)
        }
    }
}

console.log(map)


