//map

//signature of map function , it take two arguments (value , index)

let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (userFunc) {
  let result = [];

  const arr1 = this;

  for (let i = 0; i < arr1.length; i++) {
    result.push(userFunc(arr[i]));
  }

  return result;
};

const res = arr.myMap((e) => e * 2);

// console.log(res);

// forEach ,signature => iterate at each element

if (!Array.prototype.forEachMe) {
  Array.prototype.forEachMe = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i, this);
    }
  };
}

// arr.forEachMe((e) => console.log(e));

//filter
//signature => input (value,index,array) , output sorted array

if (!Array.prototype.filterMe) {
  Array.prototype.filterMe = function (userFn) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      if (res.push(userFn(this[i], i, this))) {
        res.push(this[i]);
      }
    }
    return res;
  };
}

// arr.filterMe((e)=> e % 2 == 0)

//push
//signature => value ,i array as input , output return new array

if (!Array.prototype.pushMe) {
  Array.prototype.pushMe = function (...element) {
    for (let i = 0; i < element.length; i++) {
      this[this.length] = element[i];
    }
    return this;
  };
}

let newArray = arr.pushMe(10, 45);
// console.log(newArray);

//pop()
// signature delete last element from array

if (!Array.prototype.popMe) {
  Array.prototype.popMe = function () {
    let ele = this[this.length - 1];
    this.length = this.length - 1;
    return ele;
  };
}

arr.popMe();

console.log(arr);
