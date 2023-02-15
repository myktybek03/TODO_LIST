import React from "react"
import styled from "styled-components"

const Button = (props) => {
  const { onClick, children, title, disabled = false } = props
  return (
    <ButtonStyle {...props} onClick={onClick} title={title} disabled={disabled}>
      {children}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  margin-left: 20px;
  height: 50px;
  cursor: pointer;
  background-color: beige;
  font-size: 1.5rem;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: rgb(240, 240, 155);
  }
`
