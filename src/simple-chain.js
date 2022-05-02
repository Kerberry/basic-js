const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  res:[],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    return(this.res.length);
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    this.res.push(`( ${value} )`);
    return(this);
  },
  removeLink(position) {
    if (/*typeof(position) != 'object' && */position % 1 == 0 ){
    //throw new NotImplementedError('Not implemented');
      if(position <= this.res.length){
        this.res.splice(position-1, 1);
        return this;
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
    this.res = this.res.reverse();
    return this;

  },
  finishChain() {
	  let n = this.res.join('~~');
    this.res = [];
    return n;
  }
};

module.exports = {
  chainMaker
};
