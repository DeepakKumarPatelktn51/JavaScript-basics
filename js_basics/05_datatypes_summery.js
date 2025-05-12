// data-types 

// primitive datatypes
// 7 types - String, Number, Boolean, null, undefined, Symbol, BigInt

const name="Deepak"

const number=5;
const num=5.4

const isLoggedIn=true

const a=null

let b;

let num1=Symbol('123')
let num2=Symbol('123')
//console.log(num1 == num2)

const bigNumber=12345678990678n




//reference datatypes  (non primitive datatypes)
//arrays, objects, functions

const names =  ["raja", "ravi kumar", "amit singh"]; // array

let obj= {                                                   // object
    name : "Deepika",
    age : 26,
    occupation : "job search"

}

            // function
           const Result = function (){
            console.log("hello javascript")
            }

// note 
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object