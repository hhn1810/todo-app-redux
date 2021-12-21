import { Col, Row, Input, Button, Select, Tag } from 'antd'
import { useState } from 'react'
import Todo from '../Todo'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { todosRemainingSelector } from '../../redux/selectors'
import todoListSlice from './todoListSlice'
export default function TodoList() {
  const dispatch = useDispatch()
  const [todoName, setTodoName] = useState('')
  const [todoPriority, setTodoPriority] = useState('Medium')
  const todoList = useSelector(todosRemainingSelector)
  const handleTodoNameChange = (event) => {
    setTodoName(event.target.value)
  }
  const { addTodo } = todoListSlice.actions

  const handlePriorityChange = (value) => {
    setTodoPriority(value)
  }

  const handleButtonAddClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: todoPriority,
        completed: false
      })
    )
    setTodoName('')
    setTodoPriority('Medium')
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
            id={todo.id}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleTodoNameChange} />
          <Select
            defaultValue="Medium"
            onChange={handlePriorityChange}
            value={todoPriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleButtonAddClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
