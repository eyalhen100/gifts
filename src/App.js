import React from 'react';
import logo from './logo.svg';
import './App1.css';
import AppContext from './AppContext.js';
import Header from "./Header.js"
import GiftList from './GiftList.js'
import NewGiftForm from './NewGiftForm.js'

// old staff
import Details from './Details.js';
import List from './List.js';
import ShoppingList from './ShoppingList.js';
import Game from './Ttt.js';
import JStest from './JStest.js';
import Person from './Person.js';
import TheReactComponent from './TheReactComponent.js'


class App extends React.Component {
  

	constructor(){
		super();
		this.state = {
			login:false,
			menu:null,
		};
		
		this.ctx= new AppContext();


	}	

  render() {
    return (
     

      <div>    
     	<Header ctx={this.ctx} app={this}/>

		     	         
		{(this.state.login&&(this.state.menu=="mygifts"))?(<GiftList ctx={this.ctx} app={this}/>):""}
		{(this.state.login&&(this.state.menu=="newgiftform"))?(<NewGiftForm ctx={this.ctx} app={this}/>):""}

      </div>
        

     );
 }
// old staff
/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">App.js</p>
        <Details />
        <List />
        <ShoppingList name="Joe"/>
          <Game />
          <JStest />
         
        	<TheReactComponent name="Eyal"  app={()=>this.setOn()} />
     	
   			{this.state.on ? <Game /> : ""}
    
        */


     

   updateLogin(isLogin){
   		isLogin? this.setState((prevState, props)=>({login:true,menu:"mygifts" }))
   		: this.setState((prevState, props)=>({login:false,menu:null}))
   		;
   }

   setMenu(imenu){
   		this.setState((prevState, props)=>({login:prevState.login,menu:imenu }));
   }

   isMenu(imenu){
   	return (this.state.menu==imenu)?true:false;
   }





}
//var x = "";
//x+= ' window.addEventListener('mousedown', function(e) {  document.body.classList.add('mouse-navigation');  document.body.classList.remove('kbd-navigation');});window.addEventListener('keydown', function(e) {  if (e.keyCode === 9) {    document.body.classList.add('kbd-navigation');    document.body.classList.remove('mouse-navigation');  }});window.addEventListener('click', function(e) {  if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {    e.preventDefault();  }});window.onerror = function(message, source, line, col, error) {  var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';  errors.textContent += text + '\n';  errors.style.display = '';};console.error = (function(old) {';
//x+=' return function error() {    errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';    errors.style.display = '';    old.apply(this, arguments);  }})(console.error); ";';

export default App;



