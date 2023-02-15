import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TodoForm from "./components/todo-form/TodoForm"
import TodoList from "./components/todo-list/TodoList"
import styled from "styled-components"
import "./App.css"
import TodosActions from "./components/todos-actions/TodosActions"
import { RiH2 } from "react-icons/ri"

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isComleted: false,
      id: uuidv4(),
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComleted: !todo.isComleted } : { ...todo }
      )
    )
  }

  const resetTodosHAndler = () => {
    setTodos([])
  }

  const deleteComletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComleted))
  }

  const completedTodoCount = todos.filter((todo) => todo.isComleted).length

  return (
    <div className="App">
      <H1>Todo App</H1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodoCount}
          resetTodos={resetTodosHAndler}
          deleteComletedTodos={deleteComletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodoCount > 0 && (
        <h2>{`You have comleted ${completedTodoCount} ${
          completedTodoCount > 1 ? "todos" : "todo"
        }`}</h2>
      )}
    </div>
  )
}

export default App

const H1 = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 40px;
  margin-top: 24px;
`
