import './TodoList.css'
import type { ITask } from '../App'
import { Check, Pencil, Trash2 } from 'lucide-react'

interface TodoListProps {
  tasks: ITask[]
  onToggleTask: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
  onEditTask: (task: ITask) => void
}

function TodoList({ tasks, onToggleTask, onDeleteTask, onEditTask }: TodoListProps) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => onToggleTask(task.id)}
            />
            <div className="custom-checkbox">
              {task.isCompleted && <Check size={16} strokeWidth={3} />}
            </div>
          </label>
          
          <p className="task-title">{task.title}</p>

          <div className="task-actions">
            <button 
              className="action-btn edit-btn" 
              onClick={() => onEditTask(task)}
              title="Editar"
            >
              <Pencil size={18} />
            </button>
            <button 
              className="action-btn delete-btn" 
              onClick={() => onDeleteTask(task.id)}
              title="Excluir"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList