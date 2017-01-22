import React from 'react';

class TheReactComponent extends React.Component {
  
  constructor(props){

  		super(props);
		this.state = {};//{name: "Eyal"};
  		this.state.name = "Eyal2";
  		//this.setName = this.setName.bind(this);

  		//member
  		this.membervar = new Date();
  } 	


  render() {
    return (
      <div>
      	Render has run and the name is now : {this.state.name} <br/>
      	<button  onClick={()=>this.setName("Eyal")} >Set State = Eyal </button>
      	<button  onClick={()=>this.setName("Hen")} >Set State = Hen </button>
      </div>
   );
  }


  setName(inName){
  	this.setState((prevState, props)=>({
  			name:prevState.name+inName
  			//name:this.state.name+inName
 		}));
  }


  componentDidMount() {
  		// Init after first render
  		this.setState((prevState, props)=>({name:prevState.name+"chardash"}));
  }

  componentWillUnmount() {
  		// cleanup
  }
}

export default TheReactComponent;



