function sum(a,b){
    return a+b;

}
const finalsum = sum(3,4);
console.log(finalsum);

//length of string

const str="SAGAR";
console.log(str.length);

// indexof

function findIndexof(str,target){
    console.log("Orginal String : ", str);
    console.log("index: ", str.indexOf(target));
}
findIndexof("Hello Sagar Helo SAGAR");


// Slice 

function getSlice(str,start,end){
    console.log("Orginal String : ", str);
    console.log("After slice : ", str.slice(start,end));

}
getSlice("Hello World",0,5);


let ans = "s manna".slice(0,5);
console.log(ans);

const value1="Harkirat Singh";
let ans1 =value1.slice(0,5);
console.log(ans);