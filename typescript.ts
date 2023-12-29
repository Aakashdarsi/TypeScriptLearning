const a:number = 1

const b:number = 2.33334;

const c:boolean =  true;


const d:string = "Hi Hello There"


// Arrays And Object Types
let hobbies:string[];
let numbers:number[];


type person = {
    name:string,
    age:number
}


let people:person[]

interface human {
    name:string,
    age:number,
    gender:string
} // which can be used in place of type 

class deffer
{
    c:number;
    b:boolean;
    constructor()
    {

    }

}
// we can create object and passs it as like a normal coding constructor



// generics
function genricFunction<T>(vals:T[],age:T)
{

}