import React, { Component } from 'react';

class ToDoItem extends Component{
  render(){
    return(
      <div className="Item">
        <p className="Todo">{this.props.todo}</p>
        <button className="Delete" onClick={this.props.deleteItem} >-</button>
      </div>
    )
  }
}

export default ToDoItem;