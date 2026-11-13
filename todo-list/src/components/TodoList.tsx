import './TodoList.css'
import type { ITask } from '../App'
import { Check } from 'lucide-react'

interface TodoListProps {
  tasks: ITask[]
  onToggleTask: (taskId: string) => void
}

function TodoList({ tasks, onToggleTask }: TodoListProps) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <label key={task.id} className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => onToggleTask(task.id)}
            />
            <div className="custom-checkbox">
              {task.isCompleted && <Check size={16} strokeWidth={3} />}
            </div>
          </div>
          <p>{task.title}</p>
        </label>
      ))}
    </div>
  )
}

export default TodoList