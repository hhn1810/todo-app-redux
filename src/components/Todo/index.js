import { Row, Tag, Checkbox, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import todoListSlice from '../TodoList/todoListSlice'
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray'
}

export default function Todo({ name, prioriry, completed, id }) {
  const [checked, setChecked] = useState(completed)
  const { toggleCompleted, deleteTodo } = todoListSlice.actions
  const dispatch = useDispatch()
  const toggleCheckbox = () => {
    setChecked(!checked)
    dispatch(toggleCompleted(id))
  }
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {})
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <div>
        <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
          {prioriry}
        </Tag>
        <Button
          shape="circle"
          icon={<DeleteOutlined />}
          style={{ marginLeft: 5 }}
          onClick={handleDeleteTodo}
        />
      </div>
    </Row>
  )
}
