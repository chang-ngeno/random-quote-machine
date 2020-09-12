import React, {Component} from 'react';

export default class Template extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return{
      <div id='quote-box'>
        <div id='text'></div>
        <div id='author'></div>
        <div id='text'></div>
      </div>
    }
  }
}
