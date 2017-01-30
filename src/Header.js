import React from 'react';
//import User from './User.js';
//import AppContext from './AppContext';

class Header extends React.Component {
  
 constructor(props){
 	super(props);
 	this.state={};
 	
 	//var s = props.ctx.getUser();
 }



  render() {

  	let header_style = {
  	  position: "fixed",
      top: 0,
      right: 0,
      width: 1400,    	
	  background: "#9400D3",
	  height: 100,
	  padding: 20,
	  color: "white",
	  //"box-shadow": "0px 3px 2px grey",	  
	};

	let login_style = {
		position: "fixed",
		top: 10,
		right: 10,
		color: "white",
	};


	let lin = this.props.ctx.isSignedIn();
	let fname = lin?this.props.ctx.getUser().getFullName():"";

	return (
		<nav className="navbar navbar-inverse">
		  <div className="container-fluid">
		    <div className="navbar-header">
		       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
		       <span className="icon-bar"></span>
		       <span className="icon-bar"></span>
		       <span className="icon-bar"></span>                        
		      </button><a className="navbar-brand" href="#">Gifts</a>
		    </div>
		    <div class="collapse navbar-collapse" id="myNavbar">
			    {lin?this.getNav():""}		    
			    <ul className="nav navbar-nav navbar-right">
			      <li><a href="#"><span className="glyphicon glyphicon-user"></span>{lin ?  "  " + fname : "Sign Up"}</a></li>
			      <li><a href="#" onClick={lin?(e)=>this.logout(e):(e)=>this.signIn(e)}><span className={lin?"glyphicon glyphicon-log-out":"glyphicon glyphicon-log-in"}></span>
			      {lin ?  "  Logout" :  "  Login"}</a></li>
			    </ul>
		  	</div>
		  </div>
		</nav>


		);


  }

  getNav(){
  	return (

				<ul className="nav navbar-nav">
			      <li className={this.props.app.isMenu("mygifts")?"active":""}><a href="#" onClick={(menu)=>this.props.app.setMenu("mygifts")}>My Gifts</a></li>
			      <li className={this.props.app.isMenu("findfriends")?"active":""}><a href="#" onClick={(menu)=>this.props.app.setMenu("findfriends")}>Find Friends</a></li>
			      <li className={this.props.app.isMenu("myfriends")?"active":""}><a href="#" onClick={(menu)=>this.props.app.setMenu("myfriends")}>My Friends</a></li>
			  		
			    </ul>

  		);
  }


  logout(e){
  		e.preventDefault();
  		this.props.ctx.logout();
  		this.props.app.updateLogin(false);//setState((prevState, props)=>({})); //only setState runs render again. 			
 		
  }

  signIn(e){
  	e.preventDefault();
  	this.props.ctx.signIn("eyalhen0@gmail.com","Tiger0");
  	this.props.app.updateLogin(true);//setState((prevState, props)=>({}));
  }	

}

export default Header;



