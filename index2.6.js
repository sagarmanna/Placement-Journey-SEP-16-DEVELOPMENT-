// Map , filter, Arrows Functions 

// function sum(a,b){
//     return a+b;

// }
// const ans =sum(3,4);
// console.log(ans);



// given array , give me back a new array 
//in which every value is multiple by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

const input=[1,2,3,4,5];
const newArray=[];
for(let i=0;i<input.length;i++){
    newArray.push(input[i] * 2);

}
console.log(newArray);
// other solution 
function transform (i){
    return i*2;
    
}