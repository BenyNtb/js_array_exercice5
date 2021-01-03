let tabExo = ["1","2", "3", "4", "5"]
console.log(tabExo);
//EXO 1

console.log(tabExo.length);
// EXO 2

tabExo.pop(5)
console.log(tabExo);
//EXO 3

tabExo.shift(4)
console.log(tabExo);
//EXO 4

tabExo.push("6", "7")
console.log(tabExo);
//EXO 5

tabExo.unshift("8", "9", "10")
console.log(tabExo);
// EXO 6

tabExo.reverse()
console.log(tabExo);
// EXO 7

let box = ["Sneakers", "Jacket"]
alert(box)
box.unshift("Book")
alert(box)
box.push("Hat", "Gloves","Socks")
alert(box)
box.splice(0,3)
alert(box)
box.push("Hoodie")
alert(box)
alert(`Ayhan has ${box.length} items in his box`)
box.splice(-2,2)
alert(box)
box.splice(0,2)
alert(box)
alert(`Ayhan has ${box.length} items in his box`)