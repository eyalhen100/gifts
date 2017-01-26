import React from 'react';
import logo from './logo.svg';
import './App1.css';
import Details from './Details.js';
import List from './List.js';
import ShoppingList from './ShoppingList.js';
import Game from './Ttt.js';
import JStest from './JStest.js';
import Person from './Person.js';
import TheReactComponent from './TheReactComponent.js'

class App extends React.Component {
  render() {
    return (
     
      
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
        */
        
        <div>
         
        	<TheReactComponent name="Eyal"/>
     	
   
    
          
      </div>
        	
    );  
  }
}
//var x = "";
//x+= ' window.addEventListener('mousedown', function(e) {  document.body.classList.add('mouse-navigation');  document.body.classList.remove('kbd-navigation');});window.addEventListener('keydown', function(e) {  if (e.keyCode === 9) {    document.body.classList.add('kbd-navigation');    document.body.classList.remove('mouse-navigation');  }});window.addEventListener('click', function(e) {  if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {    e.preventDefault();  }});window.onerror = function(message, source, line, col, error) {  var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';  errors.textContent += text + '\n';  errors.style.display = '';};console.error = (function(old) {';
//x+=' return function error() {    errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';    errors.style.display = '';    old.apply(this, arguments);  }})(console.error); ";';

export default App;



