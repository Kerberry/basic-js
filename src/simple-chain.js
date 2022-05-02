const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res:[],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    this.res = res;
    return(this.res.length);
  },
  addLink(value) {
    //res = chainMaker.res;
    //throw new NotImplementedError('Not implemented');
    return(res.push(`~~(${value})`));
  },
  removeLink(position) {
    if (typeof(position) == 'number' && position % 1 == 0 ){
    //throw new NotImplementedError('Not implemented');
      if(position <= this.res.length){
        this.res.splice(position-1, 1);
        return this.res.join('');
      }
      else{
        throw new Error("You can't remove incorrect link!")
      }
    }
    else{
      throw new Error("You can't remove incorrect link!")
    }

  },
  reverseChain() {
    let result = this.res.reverse().join('');
    return result;

  },
  finishChain() {
    let fin = this.res;
    this.res = [];
    return fin;
  }
};

module.exports = {
  chainMaker
};
