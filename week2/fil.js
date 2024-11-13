function sum(a,b){
    return a+b;

}
const ans =sum(1,4);
console.log(ans);


// map ,filter

given an array , give me back a new array in which every 
value is multiplied by 2
[1,2,3,4,5]
[2,4,6,8,19]


const newArray=[];

for(let i=0;i<input.length;i++){
    newArray.push(input[i]*3);
}
console.log(newArray);


//other solution
const input=[1,2,3,4,5];
function transform(i){
  

    return i*2;

}
const ans= input.map(transform);
console.log(ans);

// filteing
//what if I tell u, given an input array , give me track all the even values from it 

const arr=[1,2,3,4,5];
//ans
const newArr=[];
for(let i =0; i<arr.length;i++){
    if(arr[i]%2==0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);


// finding start with h

const arr=["harkirat", "sagar", "prash"];
const ans=arr.filter(function(n){

if(n.startsWith("h")){
    return true;

} else{
    return false;
}
});
console.log(ans);
