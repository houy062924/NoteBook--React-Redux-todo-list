const initState = {
  todos: [
    {
      id: 0,
      body: "Finish React todo list project",
      finished: true,
    }, 
    {
      id: 1,
      body: "Watch Udemy course: Understanding the weird parts of JavaScript",
      finished: false,
    },
    {
      id: 2,
      body: "Excersise: rock climbing",
      finished: false,
    }
  ],
  input: "",
}

const rootReducer = (state = initState, action) => {
  if (action.type === "FINISH_TODO") {    
    let updatedTodos = state.todos.map((todo) => {
      if (todo.id !== action.id) {
        // keep the rest as is
        return todo
      }
  
      // change the one clicked with an updated value
      let finishedTodo = {
        ...todo,
        finished: !todo.finished,
      }
      return finishedTodo
    })

    return {
      ...state,
      todos: updatedTodos,
    }
  }
  
  if (action.type === "DELETE_TODO") {
    let newTodos = state.todos.filter((todo) => {
      return todo.id !== action.id
    });
    return {
      ...state,
      todos: newTodos,
    }
  }

  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  }

  if (action.type === "UPDATE_INPUT") {
    return {
      ...state,
      input: action.input
    }
  }

  return state;
}

export default rootReducer;