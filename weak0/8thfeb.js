const tea = ['Green','Black','Herbal'];

tea.push("Earl Grey");

// console.log(tea);

const index = tea.indexOf("Herbal");
// console.log(index);

if(index > -1){
    tea.splice(index,1);
}

// console.log(tea);

const caffinatedTeas = tea.filter((tea) => tea !== "Green" )

// console.log(caffinatedTeas)

const murgi = ["🐥","🥚"]

// console.log(murgi.sort())

for(let i = 0 ; i <tea.length; i++){
    // console.log(tea[i])
}

let count = 0 ;

for(let i = 0 ; i <tea.length; i++){
    if(tea[i] !== "Green"){
        count++;
    }
    
}

// console.log(count)


let upperCaseTeas = [];

for(let i = 0 ; i <tea.length; i++){
    upperCaseTeas.push(tea[i].toUpperCase());
}

// console.log(upperCaseTeas)


let mostChar = "";

for(let i = 0 ; i <tea.length; i++){
    if(mostChar.length < tea[i].length){
        mostChar = tea[i]
    }
}

// console.log(mostChar)

for(let i = tea.length - 1 ; i >= 0 ; i --){
   console.log(tea[i])
}




