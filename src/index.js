import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class  Myapp extends React.Component {

  render() { 
    return ( 
      <div>
        <nav >
        <h1 >myapp</h1>
        </nav>
        <h1>welcome to my testing website</h1>
        <p>thank u for visiting my website this is website i created for testing</p>
      </div>
     );
  }
}

ReactDOM.render(<Myapp/>,document.getElementById('root'));