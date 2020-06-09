import React from 'react'
const Option = require('./Option').Option


const Options = (props) =>(
  <div>
  <div className = 'widget--header'>
      <h1 className = 'w_header'>Your Options</h1>
      <button 
        className = 'button button--link'
        onClick={props.handleDeleteOptions}>
        Remove All
      </button>
  </div>
  
    {props.options.length === 0 && <p className = 'message'>Please add an option to get started!</p>}
    {
      props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count = {index+1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

  export default Options