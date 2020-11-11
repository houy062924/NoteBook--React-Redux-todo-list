import React, { Component } from "react"

class Todos extends Component {
  finishTodo = (id) => {
    this.props.finishTodo(id)
  }
  deleteTodo = (id) => {
    this.props.deleteTodo(id)
  }
  render() {
    const renderCheckbox = (todo) => {
      return (
        <div className="checkbox" 
          onClick={() => {this.finishTodo(todo.id)}}
        >
          { todo.finished &&
            <span className="check">
              &#10003;
            </span>
          }
        </div>
      )
    }
    const renderTodoText = (todo) => {
      return (
        <div className="todo-text">
          <p className={`${todo.finished ? "todo finished": "todo"}`} 
            onClick={() => {this.finishTodo(todo.id)}}
          >
            {todo.body}
          </p>

          <img src="./images/delete.png"
            className="delete-button"
            onClick={() => {this.deleteTodo(todo.id)}}
          />
        </div>
      )
    }

    return (
      <div className="todo-cont">
        {
          this.props.todos.map((todo) => {
            return (
              <div className="todo-line" key={todo.id}>
                { renderCheckbox(todo) }

                { renderTodoText(todo) }
              </div> 
            )
          })
        }
      </div>
    )
  }
}

export default Todos