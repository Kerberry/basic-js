const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  if(options.repeatTimes){
    for(let i = 0; i < options.repeatTimes; i++){
      result += str.toString();
      for(let j=0; j < options.additionRepeatTimes; j++ ){
        if(options.addition){
          result += options.addition.toString();
        }
        if(j < options.additionRepeatTimes -1){
          if(options.additionSeparator){
            result += options.additionSeparator;
          }
        }
        
      }
      if(i < options.repeatTimes -1){
        if(options.separator){
          result += options.separator;
        }
        else{
          result += '+';
        }
      }
    }
  }
  else{
    result += str.toString();
    if(options.additionRepeatTimes){
      for(let j=0; j < options.additionRepeatTimes; j++ ){
        if(options.addition){
          result += options.addition.toString();
        }
        if(options.additionSeparator){
          result += options.additionSeparator;
        }
      }
      
    }
    else{
      result+=options.addition;
    }
  }
  return result;
}

module.exports = {
  repeater
};
