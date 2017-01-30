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
		let id = this.gifts.length;// generate the ID	
		gift.setId(id);	
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
	constructor(name, price, url){
		this.giftId = 0;
		this.name = name;
		this.price = price;
		this.url = url;
		this.claimed = false;
		this.friendid = 0; 
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

	setId(id){
		this.giftId = id;
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
		this.users.push(new User(0, "Eyal0", "Hen", "eyalhen0@gmail.com", "Tiger0" ));
		this.users.push(new User(1, "Eyal1", "Hen", "eyalhen1@gmail.com", "Tiger1" ));
		this.users.push(new User(2, "Eyal2", "Hen", "eyalhen2@gmail.com", "Tiger2" ));
		this.users.push(new User(3, "Eyal3", "Hen", "eyalhen3@gmail.com", "Tiger3" ));
		this.users.push(new User(4, "Eyal4", "Hen", "eyalhen4@gmail.com", "Tiger4" ));
		this.users.push(new User(5, "Eyal5", "Hen", "eyalhen5@gmail.com", "Tiger5" ));
		this.users.push(new User(6, "Eyal6", "Hen", "eyalhen6@gmail.com", "Tiger6" ));
		this.users.push(new User(7, "Eyal7", "Hen", "eyalhen7@gmail.com", "Tiger7" ));
		this.users.push(new User(8, "Eyal8", "Hen", "eyalhen8@gmail.com", "Tiger8" ));
		this.users.push(new User(9, "Eyal9", "Hen", "eyalhen9@gmail.com", "Tiger9" ));

		// initiate friends for user 0
		this.users[0].addFriend(this.users[1]);
		this.users[0].addFriend(this.users[2]);
		this.users[0].addFriend(this.users[3]);

		// initiate gifts for user 0
		this.users[0].addGift(new Gift("Gift0", "$351", "http://www.cnn.com/0"));
		this.users[0].addGift(new Gift("Gift1", "$352", "http://www.cnn.com/1"));
		this.users[0].addGift(new Gift("Gift2", "$353", "http://www.cnn.com/2")); // initiate one claim
		this.users[0].addGift(new Gift("Gift3", "$354", "http://www.cnn.com/3"));
		this.users[0].addGift(new Gift("Gift4", "$355", "http://www.cnn.com/4"));
		this.users[0].addGift(new Gift("Gift5", "$356", "http://www.cnn.com/5"));


	}

	addGift(name,price,url){
		this.users[0].addGift(new Gift(name,price,url));
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

	addGift(name,price,url){
		this.db.addGift(name,price,url);
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

  addGift(name,price,url){
  	this.server.addGift(name,price,url);
  	//this.user.addGift(new Gift(name,price,url));
  }	
}

export default AppContext;
