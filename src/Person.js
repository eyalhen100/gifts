//import React from 'react';

class Personn {
  
  constructor(first, last){
  	this.firstName = first;
  	this.lastName = last;
  }	

  fullName(){
  	return this.firstName+" "+this.lastName;
  }

}



export default Personn;
