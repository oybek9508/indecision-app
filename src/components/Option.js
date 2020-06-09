import React from 'react'
 exports.Option = Option = (props) => (
  <div className = 'option'>
    <p className = 'option_item'>{props.count}. {props.optionText}</p>
    <button
    className = 'button button--link'
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }
    }
    >
      remove
    </button>
  </div>
);
  
