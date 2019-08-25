
/**
 * 
 * Function that extracts numbers from string ..
 * @param {String} input : expression that contains numbers
 * 
 */

const f2 = input => input.match(/[-]?([0-9]*[.])?[0-9]+/g) === null ? [] : input.match(/[-]?([0-9]*[.])?[0-9]+/g);



// ################ check the example ################ //


/*  
let input_value = 'a1 12 13.b -14.5+2';

console.log(f2(input_value));
  */