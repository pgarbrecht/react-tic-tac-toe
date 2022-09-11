import React, {Component} from 'react'

//bottom level component
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        <div class="square-text">{props.value}</div>
      </button>
    );
}

export default Square;