import React from "react"
import { useState } from "react"
import Button from "../UI/Button"
import styled from "styled-components"

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("")

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText("")
  }

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }
  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <Input
          placeholder="enter new todo"
          value={text}
          onChange={onChangeHandler}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default TodoForm

const Container = styled.div`
  margin-bottom: 30px;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Input = styled.input`
  width: 45%;
  height: 30px;
  font-size: 1.3rem;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
`
