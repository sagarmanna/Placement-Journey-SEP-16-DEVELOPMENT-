//Date class

const currentDate= new Date();
console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());
console.log("Time in millisecounds since 1970 : ",currentDate.getTime());


function calculateSum(){
    const a =0;
    for(let i =0;i<100000;i++){
       // a = a+i;

    }
    return a;
}
const beforeDate=new Date();
calculateSum();
const afterDate= new Date();
const afterTimeInMs=beforeDate.getTime();

console.log(afterTimeInMs);