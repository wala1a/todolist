import React, { Component } from 'react';
import './App.css';
class Listitem extends Component {
  state = {
    hide: 'false'
  }
  hideitems = () => {
    if (this.state.hide === 'false'){
      this.setState({hide: 'hidden'})
    } else {
      this.setState({hide: 'false'})
    }
  }
    render() {
      return (

       <li className={this.state.hide} onClick={this.hideitems}>
       {this.props.todo}
       </li>

      );
    }
  }
export default Listitem;