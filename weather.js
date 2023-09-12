const kelvin = 293; // kelvin's temp is constant

//celsius is equal to kelvin - 273
var celsius = kelvin - 273;

// fahrenheit is this
let fahrenheit = celsius * (9/5) + 32;

//rounding fahrenheit down to the nearest integer
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
