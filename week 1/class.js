class Animal{
    constructor(name,legCount,speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks= speaks;
    }
    static
    speaks(){
        console.log("hi there"+ this.speaks);
    }
    
    }


let dog1 ={
    name:"dog",
    legCount: 4,
    speaks:"bhow bhow",//dont do this 
}
let dog=new Animal("dog","bhow bhow");//do this 
