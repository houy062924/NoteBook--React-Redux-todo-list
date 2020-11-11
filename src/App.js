import React, { Component } from "react"
import Todos from "./components/Todos"
import AddForm from "./components/AddForm"
import "./styles/style.css"
import { connect } from "react-redux"
import { deleteTodo, addTodo, updateInput, finishTodo } from "./actions/todoActions"

class App extends Component {
  render() {
    return (
      <div className="page-cont">
        <div className="double-lines"></div>
        <h1 className="page-title">To-Do List</h1>

        <div className="page-content">
          <Todos 
            todos={this.props.todos} 
            finishTodo={this.props.finishTodo}
            deleteTodo={this.props.deleteTodo} 
          />

          <AddForm 
            addTodo={this.props.addTodo} 
            updateInput={this.props.updateInput}
            input={this.props.input}
          />
        </div>
        
      </div>
    );
  } 
}


// Redux
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    input: state.input,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    finishTodo: (id) => {
      dispatch(finishTodo(id))
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    },
    addTodo: (todo) => {
      dispatch(addTodo(todo))
    },
    updateInput: (input) => {
      dispatch(updateInput(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
