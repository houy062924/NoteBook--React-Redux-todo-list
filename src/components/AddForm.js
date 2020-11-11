import React, { Component } from "react"

class AddForm extends Component {
  handleInput = (e) => {
    this.props.updateInput(e.target.value)
  }
  handleSubmit = (e) => {
    e.preventDefault();

    let todo = {
      id: Math.random(), 
      body: this.props.input,
      finished: false,
    }
    let defaultValue = ""

    this.props.addTodo(todo)
    this.props.updateInput(defaultValue)
  }
  
  render() {
    return (
      <form className="newTodo-cont" onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={this.handleInput}
          value={this.props.input}
          placeholder="Add New Task Here">
        </input>
      </form>
    )
  }
}

export default AddForm