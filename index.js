// console.log('hello world')

let backpack = []

backpack.push('sword')
backpack.push('shied')
backpack.push('food')

// console.log(backpack)

let sword = backpack.splice(0,1)
// // console.log(backpack)
// console.log(sword)

let furCoat = 'fur coat'
backpack.push(furCoat)
backpack.pop()

let itemCount = backpack.length

// console.log(itemCount)

backpack.push('flint', 'blanket', 'knife', 'toothbrush', 'something')

let iteCount2 = backpack.length
// console.log(backpack)

let backpack2 = backpack.splice(2,3)
console.log(backpack)
console.log(backpack2)

for (let i = 0; i < backpack.length; i++){
    console.log(backpack[i])
}

