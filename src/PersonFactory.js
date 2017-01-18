//import React from 'react';

import Personn from './Person.js';


class PersonnFactory{



	static createPerson(){

		return new Personn("factory","Person");
	}



}


export default PersonnFactory;