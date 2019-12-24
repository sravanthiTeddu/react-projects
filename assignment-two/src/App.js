import React, { useState } from 'react';
import {ValidationComponent} from './ValidationComponent';
import {CharComponent} from './CharComponent';
import './App.css';

function App() { 

  let [state, updateState] = useState({
      text : {
        stringVal : "",
        length : "0"
      }
  });

  const stringLengthHandler = (event) => {
      let string = event.target.value;
      let strLength = string.length;
      updateState({
        text : {
          stringVal : string,
          length : strLength
        }
      })
      
  }

  let stringArray = state.text.stringVal.split('');

  const removeCharacter = (index) => {
    stringArray.splice(index, 1);
    updateState({
      text : {
        stringVal : stringArray.join(''),
        length : stringArray.length
      }
    })
  }

  
  let charcomps = stringArray.map( (char, index) => {
    return <CharComponent key={index} char={char} onClick={() => {removeCharacter(index)}}/>
  });

  return (
    <div className="App">
      <input type="text" onChange={stringLengthHandler} value ={state.text.stringVal}/>
      <p>The length of the input is {state.text.length} </p>
      <br/>
      <ValidationComponent textLength = {state.text.length} />
      {charcomps}
    </div>
  );
}

export default App;
