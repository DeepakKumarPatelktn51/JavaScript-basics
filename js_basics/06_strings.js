const name="Deepak";               // one way to define string
const repocount=50;

//console.log(name+" "+repocount+" "+"value 60");    // old way to concatinate string

  
  // this is called string interpolation & modern way to concatinate string.
//console.log(`Hello my name is ${name} and having length of ${name.length} and my repocount is ${repocount}`);

//another way to define string is 
const gameName=new String("Deepakpk")
//console.log(gameName);
//console.log(gameName[0])
//console.log(gameName[8])

//console.log(gameName.toLowerCase())
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(3))
//console.log(gameName.indexOf('p'))
//console.log(gameName.substring(0, 5))
//console.log(gameName.slice(-7, 5))


let name1="  deepak  patel  ";
// console.log(name1)
// console.log(name1.trim())
// console.log(name1.trimStart())
// console.log(name1.trimEnd())

//console.log(name1.replace(' ', '_'))


let name2='deepka-kumar-patel'     // convert strings into array
console.log(name2.split('-'))