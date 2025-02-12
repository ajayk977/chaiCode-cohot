
Object.prototype.Prays = function(){
    return `Very awesome tea of type ${this.type} from ${this.origin}`;
}



const teas = {
    type: "green",
    origin: "india",
    cups:{
        small: 10,
        medium: 5
    }
};



console.log(teas.Prays());




const teas2 = {
    type: "black",
    origin: "china",
    cups:{
        small: 10,
        medium: 5
    }
};

console.log(teas2.Prays());


let arr = [1, 2, 3];
 arr.forEach(item => console.log(item)); 


 let arr1 = [1, 2, 3];
let newArr = arr.map(item => item * 2);

console.log(arr1)

let arr3 = [1, 2, 3, 4];

let FilterItems = arr3.filter((item) => item > 2)
console.log(FilterItems)