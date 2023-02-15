import React from "react"
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import Button from "../UI/Button"

const TodosActions = ({
  resetTodos,
  deleteComletedTodos,
  completedTodosExist,
}) => {
  return (
    <div>
      <Button onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button>
        <RiDeleteBin2Line
          onClick={deleteComletedTodos}
          disabled={!completedTodosExist}
        />
      </Button>
    </div>
  )
}

export default TodosActions
