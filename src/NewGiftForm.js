import React from 'react';
//import User from './User.js';
//import AppContext from './AppContext';





class NewGiftForm extends React.Component {
  
 
  constructor(props) {
    super(props);
    this.state = {description:"", price:"", url:""};

     this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleInputChange(event) {

  	const target = event.target;
    const value = target.value;//type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

     this.setState({
      [name]: value
    });

    
  }



  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);

    this.props.ctx.addGift(this.state.description,this.state.price,this.state.url);	

    this.props.app.setMenu("mygifts");
    event.preventDefault();
  }

  render() {
    return (
     
      		<div className="container">
      		<div className="col-lg-3 col-md-3"/>
      		<div className="col-lg-7 col-md-7">
		      <form  className="form-horizontal" onSubmit={this.handleSubmit}>
		        <div className="form-group">
			        <label class="control-label col-sm-2">
			          Gift:
			          <div class="col-sm-10">
			          		<input type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleInputChange} />
			          </div>
			         </label>
			     </div>
			     <div className="form-group">
			        <label class="control-label col-sm-2">
			          Gift Price:
			          <div class="col-sm-10">
			          		<input type="text" className="form-control" name="price" value={this.state.price} onChange={this.handleInputChange} />
			          </div>
			         </label>
			     </div>
			     <div className="form-group">
			        <label class="control-label col-sm-2">
			          Gift Link:
			          <div class="col-sm-10">
			          		<input type="text"  className="form-control" name="url" value={this.state.url} onChange={this.handleInputChange} />
			          </div>
			         </label>
			     </div>   

			     <div className="form-group"> 
	                <div class="col-sm-offset-2 col-sm-10">
	                 <button type="submit" className="btn btn-default">Submit</button>
	                </div>
	             </div>	
		      </form>
		     </div>
		     <div className="col-lg-2 col-md-2"/> 
		    </div>  
  
      
    );
  }
}

export default NewGiftForm;



