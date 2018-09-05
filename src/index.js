import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './components/ToDoItem';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      todos: [],
      newItem: ""
    }
  }

  onInputChange = (event) => {
    this.setState({newItem: event.target.value});
  }

  onEnterKeypress = (event) => {
    if(event.key === "Enter"){
      this.addItem();
    }
  }

  addItem = () => {
    if(this.state.newItem === ""){
      return;
    }

    this.setState({todos: [...this.state.todos, this.state.newItem]});
    this.setState({newItem: ""});
  }

  deleteItem = (index) => {
    this.setState({todos: this.state.todos.filter( (todo, i) => i !== index)});
  }

  render(){
    return (
      <div className="TodoList">
        <h1 className="Header"><i class="fab fa-react"></i> <span>React</span> To Do List</h1>

        <div className="Container">

          <div className="Input">
                <input type="text" value={this.state.newItem} onChange={this.onInputChange} onKeyPress={this.onEnterKeypress} />
                <button className="Add" onClick={this.addItem}>+</button>
          </div>

          <div className="Todos">
            {this.state.todos.map((todo, i) => 
              <ToDoItem todo={todo} key={i} deleteItem={this.deleteItem.bind(this, i)} />
            )}
          </div>

        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));