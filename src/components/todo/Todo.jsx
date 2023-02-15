import React from "react"
import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri"
import { FaCheck } from "react-icons/fa"

import styled from "styled-components"

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <TodoStyle>
      <TodoIcon />
      <TodoText>{todo.text}</TodoText>
      <DeleteIcon onClick={() => deleteTodo(todo.id)} />
      <CheckIcon onClick={() => toggleTodo(todo.id)} />
    </TodoStyle>
  )
}

export default Todo

const TodoStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 15px 0;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid #555;
  color: #112d49;
  background-color: #fbfef9;
`

const TodoText = styled.div`
  width: 100%;
  text-align: left;
`
const TodoIcon = styled(RiTodoFill)`
  font-size: 1.8rem;
  margin-right: 10px;
  color: teal;
`
const CheckIcon = styled(FaCheck)`
  cursor: pointer;
  color: lightgrey;
  padding: 0 7px;
  font-size: 1.8rem;
  transition: transform 0.3s;
  :hover {
    color: green;
  }
`
const DeleteIcon = styled(RiDeleteBin2Line)`
  cursor: pointer;
  color: lightgrey;
  padding: 0 7px;
  font-size: 1.8rem;
  transition: transform 0.3s;
  :hover {
    color: red;
  }
`
