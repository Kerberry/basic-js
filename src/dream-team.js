const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
  //throw new NotImplementedError('Not implemented');
  let res = '';
  if(!Array.isArray(members)){
    return false;
  }
  else{
    for(i of members){
      if(typeof(i) == 'string'){
        for(let j=0; j<i.length;){
          if(i[j] != ' '){
            res += i[j].toUpperCase();
            break;
          }
          j++;
        }
        
      }
      
    }
    return(res.split('').sort().join(''));
  }
  
}

module.exports = {
  createDreamTeam
};
