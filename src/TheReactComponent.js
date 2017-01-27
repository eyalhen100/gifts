import React from 'react';
//import './reactcomp.css';

class TheReactComponent extends React.Component {
  
  constructor(props){

  		super(props);
		this.state = {};//{name: "Eyal"};
  		this.state.name = "Constructor -> ";
  		this.state.nochange = true;
  		//this.setName = this.setName.bind(this);

  		this.membervar = new Date(); // this is a regular memeber not part of state / no impact on render 
  		this.fontSize = "32";
  } 	// render runs now


  render() {
   
  	  var letterStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: this.fontSize,//"32",
        textAlign: "center"
      };

      var butpos = {
      	position: "absolute",
      	bottom: 200,
    	right: 400,
    	width: 800
    	

      };


    return (
      <div style ={letterStyle}>
      	<div style={butpos}>Render has run and the name is now : {this.state.name} <br/></div>
      		<button  onClick={()=>this.setName("Eyal -> ")} >Set State.name = Eyal </button>
      		<button  onClick={()=>this.setName("Hen -> ")} >Set State.name = Hen </button>
      		{this.state.nochange ?(	
      			<button  onClick={()=>this.setNoChange()}>Set State.name = No Change </button>
      		):(	

      			<button disabled onClick={()=>this.setNoChange()}>disabled</button>
      		)

      	}
      </div>
   );
  }


  setName(inName){ 
  	this.setState((prevState, props)=>({ //only setState runs render again.
  			name:prevState.name+inName,
  			//name:this.state.nam
 			nochange:!prevState.nochange,
 		}));
  	this.fontSize=(this.fontSize=="32")?"31":"32";
  	//this.props.app.setOn();
  	this.props.app();
  }
  	
  setNoChange(){ 
  	
	this.state.name+="no-change -> ";
 		
  }


  componentDidMount() {
  		// Init after first render
  		this.setState((prevState, props)=>({name:prevState.name+"Init -> "}));
  }

  componentWillUnmount() {
  		// cleanup memory
  }
}

export default TheReactComponent;



