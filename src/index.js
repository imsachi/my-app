import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let msg=undefined;
class  Myapp extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(e){
 msg = 'im clicked';
 console.log(msg);
}
  render() { 
    return ( 
      <div>
        <nav >
        <h1 >myapp</h1>
        </nav>
        <h1>welcome to my testing website</h1>
        <p>thank u for visiting my website this is website i created for testing</p>
        {msg}
        <button onClick={this.handleClick}>click me</button>
      </div>
     );
  }
}

ReactDOM.render(<Myapp/>,document.getElementById('root'));