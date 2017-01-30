import React from 'react';
//import User from './User.js';
//import AppContext from './AppContext';



function ListItem(props) {
  return( 

  	<tr>
	    <td>{props.value.getName()}<br/><a href={props.value.getUrl()} target="_blank">{props.value.getUrl()}</a> </td>
		<td>{props.value.getPrice()}</td>
	    <td>{props.value.isClaimed()?"Claimed":""}</td>
	   
	</tr>
	);



  
}


class GiftList extends React.Component {
  
 constructor(props){
 	super(props);
 	this.state={};
 	
 	//var s = props.ctx.getUser();
 }



  render() {


	let lin = this.props.ctx.isSignedIn();
	let fname = lin?this.props.ctx.getUser().getFullName():"";
	let gifts = this.props.ctx.getUser().getGifts(); // goto server

	return (
		 <div className="container">

		 	 {(this.props.ctx.getUser().getGifts().length>6)?(
		 	 		<div className="row">	
			   <div className="col-lg-3 col-md-3 col-sm-3 "/>
		 	    <div className="col-lg-6 col-md-6 col-sm-6 ">
			     <button className="btn btn-default" onClick={()=>this.props.app.setMenu("newgiftform")}>Add a new gift</button>
			    </div> 
			    <div className="col-lg-3 col-md-3 col-sm-3 "/>
			  </div>

		 	 	):""}



		 	 <div className="row">	
			 <div className="col-lg-3 col-md-3 col-sm-3 "/>
		 	 <div className="col-lg-6 col-md-6 col-sm-6 ">
			 	 <table className="table table-hover">
				   
				    <tbody>
				      {gifts.map((gift) =>
				        <ListItem key={gift.getGiftId().toString()}
				                  value={gift} />
				      )}
				    </tbody>
				  </table>
			  </div>
			  <div className="col-lg-3 col-md-3 col-sm-3 "/>
			  </div>

			  <div className="row">	
			   <div className="col-lg-3 col-md-3 col-sm-3 "/>
		 	    <div className="col-lg-6 col-md-6 col-sm-6 ">
			     <button className="btn btn-default" onClick={()=>this.props.app.setMenu("newgiftform")}>Add a new gift</button>
			    </div> 
			    <div className="col-lg-3 col-md-3 col-sm-3 "/>
			  </div>


		 </div>
		);


  }



}

export default GiftList;



