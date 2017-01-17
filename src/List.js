import React from 'react';

class List extends React.Component {
  render() {
    return (
      <div>
      	{this.getName()}
      </div>
   );
  }


  getName(){
  	return 'List.js';
  }

}

export default List;



