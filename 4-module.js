
//Creating Module(Every file in node js is Module by default)

const names = require('./2-names') //importing the name object
const sayHi = require('./3-functions_name') //importing the function
const data  = require('./5-alternate-way-exporting'); //Fetch the data from this
data.items.forEach((item)=>{
   console.log(item);
})
console.log(data.singlePerson.name);

sayHi('Suvan') //Here Normally pass the value throught greeting function
sayHi(names.john) //We use object property name to fech the values;
sayHi(names.peter) //We use object property name to fech the values;

require('./6-mind-granade-exporting') // for invoing the function in that module that's why 
//only import that module get result 