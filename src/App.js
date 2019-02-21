// *Step 1.*  Create a react app that has a list of 5 To Do items in the JSX.  Don’t worry about the form yet, just have `ul` and `li`s of 5 items that you type out.

// *Step 2.*  Instead of having 5 items in the `li`s, make an array of `items` in the state and loop through the array to put the 5 items into the JSX

// *Step 3.*  Now make a component called `ListItem` that you can pass each item into as a prop that displays each one as an `li`.  Similar to our Meme component.

// *Step 4.*  Next add `completed` to the `ListItem` components state that defaults to `false` and gets updated to `true` when a user clicks on the `li`.  When the state `completed` is `true` it should add a CSS class that adds a strikethrough to the `li`.  Similar to our hide and show memes.

// *Step 5.*  Next add a form with an `input` that when submitted will add an `item` to the `items` array in state.  Similar to our add a meme form.

// *DO NOT just copy and paste* from your meme or other react applications.  You will have more bugs and a harder time

import React, { Component } from 'react';
import './App.css';
import Listitem from './Listitem';
// import time from './time'


class App extends Component {
  state = {
    term: '',//term to store what we passing as a value to our input
    items: []//items to store every value which we passing to our todo list
  };

  updateForm =(event)=>{
    event.preventDefault()//عmethod stops the default action of an element from happening.

    const newData = event.target.value;
   
    this.setState({
      term: newData,
    })

    console.log(this.state.term)
  }

  submitData= (e) => {
    
    e.preventDefault();

    const taskNew = this.state.term;
    if(taskNew !== '') {
    const copyItems=this.state.items.slice(0);
    copyItems.push(this.state.term);
 
    console.log(copyItems)

    this.setState({
      items:copyItems,
      term: ''
    });
  }}

  deleteItems = (event) => {

    const copy = this.state.items;
    copy.splice(0)
    this.setState({
      items: copy

    });
  }
  
  
  render() {
    console.log(this.state.items)
    console.log(this.state.term)
    
    const lists = this.state.items.map((items) => {


      console.log(items)
       return <Listitem todo={items} />;
      //eveything inside div in react only one element its show
    })
    return (
      // input value to connect the state with the input
      <div>
 
        <h2>To Do List</h2>
        { <h1>💪</h1>}
        <form onSubmit={this.submitData}>
        
            <input type='text' value={this.state.term} name='term' onChange={this.updateForm} placeholder="What is your main focus for Today" /> 
            <button className="addButton" type="submit"> Add </button>
            <button className = "deleteButton" onClick = {this.deleteItems}> Delete all</button>
        </form>

        <ul>{lists}</ul>
        <footer>All our dreams can come true, if we have the courage to pursue them. </footer> 
        
      </div>
      
    );
  
    }
}

export default App;
