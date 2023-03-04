import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
const [value, setValue] = React.useState(0);
  return (
    <div id="main">
      <ChildComponent /> 
       <input id='input' onChange={(e) => {setValue(e.target.value)}}/>
    
      <p id='output' value={value}>{Math.pow(value,2)}</p>
    </div>
  )
}


export default App;
