const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  //throw new NotImplementedError('Not implemented');
  if(!date){
    throw new Error('Unable to determine the time of year!');
  }
  if(Object.keys(date).length > 0) {
    throw new Error('Invalid date!')
  }
  if(!date.getTime && !date.getFullYear){
    throw new Error('Invalid date!')
  }
  let month = date.getMonth();
  if (month === 11 || month < 2){
    return 'winter';
  }
  if(month < 5){
    return 'spring';
  }
  if(month < 8){
    return 'summer';
  }
  else{
    return 'autumn';
  }      
    
}

module.exports = {
  getSeason
};
