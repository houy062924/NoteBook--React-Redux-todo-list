export const finishTodo = (id) => {
  return {
    type: "FINISH_TODO",
    id,
  }
}

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  }
}

export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo,
  }
}

export const updateInput = (input) => {
  return {
    type: "UPDATE_INPUT",
    input,
  }
}