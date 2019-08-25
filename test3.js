
/**
 * 
 * Function can clone an array of objects deeply ..
 * @param {Array<Object>} a : array of objects
 * 
 */

const f3 = (a) => JSON.parse(JSON.stringify(a));



// ################ check the example ################ //


/* 
const a = [{a:1,b:'str'}];
const b = f3(a);
const c = f3(b);
b[0].a = 2 ;

console.log(a[0] == b[0]); // false
console.log(a[0].a); // 1 
console.log(b[0].a); // 2 
  */