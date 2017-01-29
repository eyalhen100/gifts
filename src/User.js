//import React from 'react';



class User {
	constructor(userid,fname,lname,email,password){
		this.userId = userid;
		this.fName = fname;
		this.lName = lname;
		this.eMail =email;
		this.password = password;
		this.gifts = new Array();
		this.friends = new Array();
	}

	addGift(gift){
		this.gifts.push(gift);
	}

	getGifts(){
		return this.gifts;
	}

	addFriend(user){
		this.friends.push(user);
	}

	getFriends(){
		return this.friends;
	}

	auth(uname,pass){
		if ((this.eMail==uname)&&(this.password==pass)) return true;
		return false;
	}

	getFullName(){
		return this.fName + " " + this.lName;
	}

	
}



export default User;
