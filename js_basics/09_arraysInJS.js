let arr=[1,2,3,4,5]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[1])

let fruits=['banane','papaya','mango','grapes','orange','chiku','watermalon']
// console.log(fruits[6])
// console.log(fruits.length)
fruits[7]='roseberry'
//console.log(fruits)
fruits.push('berry-berry')
//console.log(fruits)

let myArray=new Array(1,2,3,4,5)
//console.log(myArray)


// arrays methods

myArray.push(6)                 // push() used to add new element in array
//console.log(myArray)
myArray.pop()
//console.log(myArray)            // pop() used to remove last elemtn of an array
myArray.unshift(9)              // unshift() used to add element at first
//console.log(myArray)
myArray.shift()                  // shift() used to remove element from first
// console.log(myArray)
// console.log(myArray.includes(46))
// console.log(myArray.indexOf(1))


// const newArray=new Array.join()
// console.log(myArray)
// console.log(newArray)

let myNewArray=[1,2,3,4,5]
console.log("original array : "+ myNewArray)

let sliceArray=myNewArray.slice(1,3)
console.log("sliced array : "+ sliceArray)

let splicedArray=myNewArray.splice(1,3)
console.log("splicedArray : "+splicedArray)


