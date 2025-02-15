const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  //throw new NotImplementedError('Not implemented');
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result =[];
  for(let i = 0; i<arr.length; i++){
    
    if(arr[i + 1] != '--discard-prev' && arr[i -1] != '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i] !== '--double-prev'){
      if(arr[i] == '--double-next' && i == arr.length -1){
        break;
      }
      result.push(arr[i]);
      
      if(arr[i] == '--double-next'){
        result.pop();
        result.push(arr[i + 1]);
      }
      if(arr[i + 1] == '--double-prev'){
        result.push(arr[i]);
        i++;
      }
    }
    
  }

  return result;
}

module.exports = {
  transform
};
