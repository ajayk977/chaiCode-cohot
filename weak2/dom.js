Function.prototype.describe = function(){
  console.log(`Function name is ${this.name}`)
}

function greet(name){
    console.log(`My name is ${this.name}`)
}

// greet.describe()


function applyOps(a,b,ops){
    return ops(a,b)
}

const res = applyOps(9,3, (x,y)=> x/y)

function countIncrease(){
   let count = 0;
  return function(){
    count++;
    return count
   }
}

// console.log(count)

let ct = countIncrease()
console.log(ct)

// console.log(res)

(function(){
    console.log("Hello")
})()
