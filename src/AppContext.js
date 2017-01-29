//import User from './User.js';




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


class Gift {
	constructor(giftid, name, price, url, claimed, friendid ){
		this.giftId = giftid;
		this.name = name;
		this.price = price;
		this.url = url;
		this.claimed = claimed;
		this.friendid = friendid; 
	}

	getGiftId(){
		return this.giftId;
	}

	getName(){
		return this.name;
	}

	getPrice(){
		return this.price;
	}

	getUrl(){
		return this.url;
	}

	isClaimed(){
		return this.claimed;
	}

}


class DB {
	constructor(){
		this.users = Array();
		this.init();

	}

	getUsers(){
		return this.users;
	}

	init(){
		// initiate users
		this.users.push(new User(1, "Eyal1", "Hen", "eyalhen1@gmail.com", "Tiger1" ));
		this.users.push(new User(2, "Eyal2", "Hen", "eyalhen2@gmail.com", "Tiger2" ));
		this.users.push(new User(3, "Eyal3", "Hen", "eyalhen3@gmail.com", "Tiger3" ));
		this.users.push(new User(4, "Eyal4", "Hen", "eyalhen4@gmail.com", "Tiger4" ));
		this.users.push(new User(5, "Eyal5", "Hen", "eyalhen5@gmail.com", "Tiger5" ));
		this.users.push(new User(6, "Eyal6", "Hen", "eyalhen6@gmail.com", "Tiger6" ));
		this.users.push(new User(7, "Eyal7", "Hen", "eyalhen7@gmail.com", "Tiger7" ));
		this.users.push(new User(8, "Eyal8", "Hen", "eyalhen8@gmail.com", "Tiger8" ));
		this.users.push(new User(9, "Eyal9", "Hen", "eyalhen9@gmail.com", "Tiger9" ));
		this.users.push(new User(10, "Eyal10", "Hen", "eyalhen10@gmail.com", "Tiger10" ));

		// initiate friends for user 0
		this.users[0].addFriend(this.users[1]);
		this.users[0].addFriend(this.users[2]);
		this.users[0].addFriend(this.users[3]);

		// initiate gifts for user 0
		this.users[0].addGift(new Gift(1, "Gift1", "$351", "http://www.cnn.com/1", false, 0));
		this.users[0].addGift(new Gift(2, "Gift2", "$352", "http://www.cnn.com/2", false, 0));
		this.users[0].addGift(new Gift(3, "Gift3", "$353", "http://www.cnn.com/3", true, 3)); // initiate one claim
		this.users[0].addGift(new Gift(4, "Gift4", "$354", "http://www.cnn.com/4", false, 0));
		this.users[0].addGift(new Gift(5, "Gift5", "$355", "http://www.cnn.com/5", false, 0));
		this.users[0].addGift(new Gift(6, "Gift6", "$356", "http://www.cnn.com/6", false, 0));


	}


}





class Server {
	constructor(){
		this.db=new DB();
		this.users = this.db.getUsers();
	}

	auth(uname,pass){
		
		
		for(let usr of this.users) {
      		if (usr.auth(uname,pass)) return usr;
      

    	}

    	return null;
	}


}


class AppContext {
  
  constructor(){
  	this.user = null;
  	this.signedIn = false;
  	this.server = new Server();

  	//this.signIn("eyalhen1@gmail.com","Tiger1");
  	//this.state={};	
  	//this.state.signedIn=false;	
  	//if (this.signedIn) alert("signed in");
  }	

  getUser(){
  	return this.user;
  }

  //getUserFullName(){
  //	return this.user.getFullName();
 // }

  signIn(uname, pass){
  	this.user = this.server.auth(uname,pass);
  	if(this.user){
  		this.signedIn = true;
  		return true;
  	}
  	return false;
  }

  signUp(user, pass){


  }

  isSignedIn (){
  	return this.signedIn;
  }

 logout(){
  	this.signedIn = false;

  }

}

export default AppContext;
