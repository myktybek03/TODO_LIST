import React from "react"
import styled from "styled-components"
import Todo from "../todo/Todo"

const TodoList = ({ todos, deleteTodo, toggleTodo,  }) => {
  return (
    <TodoListContainer>
      {!todos.length && <h2>Todo list os empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          
        />
      ))}
    </TodoListContainer>
  )
}

export default TodoList

const TodoListContainer = styled.div`
  padding: 10px;
`
