/**
 * Generate data with a smooth transition - v will regulate how sharp the ups
 * and downs will be.
 * 
 * @param {Number} n How many elements the returned data array should have.
 * @param {Number} min
 * @param {Number} max
 * @param {Number} v 0 < v < 1. How much an element in the returned data array
 *                   can vary from the previous one.
 * @returns {Array}
 */
function genTransitionData(n, min, max, v){
  var data = [];
  var elm = randInRange(min, max);
  var sgn = randSign();

  data.push(elm);
  for(var i=1; i<n; i++){
    // not over max:
    elm = Math.min(elm + Math.random() * v * elm * randSign(), max);
    // not under min:
    elm = Math.max(elm, min);
    data.push(elm);
  }

  return data;
}

/**
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
function randInRange(min, max){
  return min + (max - min) * Math.random();
}

/**
 * @returns [-1, 1]
 */
function randSign(){
  return Math.random() > 0.5 ? 1 : -1;
}

function assert(msg, expr){
  if (expr != true){
    throw new Error(msg + ' is FALSE');
    console.trace();
  }
}