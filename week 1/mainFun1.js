// map , filter , find ,sort 

const dog={
    name: "DOG",
    legCount: 2,
    speaks:"Bhow ",
};
const cat={
    name: "CAT",
    legCount: 2,
    speaks:"Mewoo ",
};
function printstr(animal){
    console.log("animal"+animal["name"]+" "+animal["speaks"]);
}


console.log("animal "+ dog["name"]+ " "+dog["speaks"]);
console.log("animal "+ cat["name"]+ " "+cat["speaks"]);
