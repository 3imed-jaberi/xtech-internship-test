
/**
 * 
 * Function that determines the number of occurrences of the first array words per second ..
 * @param {Array<string>} first_array : first array of string
 * @param {Array<string>} second_array : second array of string 
 * 
 */


 // from OO programming world .. 
const f1 = (first_array,second_array) => {
      let result = [];
      first_array.forEach(element => {
         result.push(second_array.filter( item => item === element ).length);
      });
    return result ;
};

 // from Functional programming world ..
// const f1 = (first_array,second_array) => first_array.map(element => second_array.filter( item => item === element ).length);

// note : same complexity .. ( see the `Array.prototype.map` )


// ################################################### //



// ################ check the example ################ //


/*  
let first_array_value = ['aba','xzxb','ab'];
let second_array_value = ['aba','baba','aba','xzxb'];

console.log(f1(first_array_value,second_array_value));
  */