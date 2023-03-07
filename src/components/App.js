import React from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const ShowSquare = ({value}) => {
    return (<p id='output' value={value}>{Math.pow(value,2)}</p>)
    // return "hello";
  }
const App = () => {
 //code here
const [value, setValue] = React.useState(0);
  return (
    <div id="main">
      <ChildComponent /> 
       <input id='input' onChange={(e) => {setValue(e.target.value)}}/>
      <ShowSquare value = {value}/>
    </div>
  )
}


export default App;
