
/**
 * 
 * Function can calls `cb` (callback func) once every 300 ms, whatever the number of calls .. 
 * @param {Function} cb : callback func
 * 
 */

const f4 = (cb) => {
    const wait = 300;
    var immediate ; 
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) cb.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) cb.apply(context, args);
	};
};



// ################ check the example ################ //


/* 
const cb = () => console.log("Imed Jaberi ..");

const f = f4(cb);

// test in once call ...
f();
// test in each 300ms ... 
setInterval(()=>f(),300);
  */