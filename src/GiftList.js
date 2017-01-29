import React from 'react';
//import User from './User.js';
//import AppContext from './AppContext';



function ListItem(props) {
  return( 

  	<tr>
	    <td>{props.value.getName()}</td>
		<td>{props.value.getPrice()}</td>
	    <td>{props.value.isClaimed()?"Claimed":""}</td>
	    <td>{props.value.getUrl()}</td>
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
			 <div className="col-lg-2 col-md-2"/>
		 	 <div className="col-lg-8 col-md-8">
			 	 <table className="table table-hover">
				    <thead>
				      <tr>
				        <th>Description</th><th>Price</th><th>Claimed</th><th>Link</th>
				      </tr>
				    </thead>
				    <tbody>
				      {gifts.map((gift) =>
				        <ListItem key={gift.getGiftId().toString()}
				                  value={gift} />
				      )}
				    </tbody>
				  </table>
			  </div>
			  <div className="col-lg-2 col-md-2"/>


		 </div>
		);


  }



}

export default GiftList;



