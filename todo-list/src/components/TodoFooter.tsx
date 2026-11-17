import './TodoFooter.css'
import { Trash2 } from 'lucide-react'

interface TodoFooterProps {
  totalTasks: number
  completedTasks: number
  onClearCompleted: () => void
}

function TodoFooter({ totalTasks, completedTasks, onClearCompleted }: TodoFooterProps) {
  if (totalTasks === 0) return null

  return (
    <div className="todo-footer">
      <div className="stats">
        <div className="stat-item">
          Tarefas criadas 
          <span className="badge">{totalTasks}</span>
        </div>
        <div className="stat-item">
          Concluídas 
          <span className="badge success">
            {completedTasks > 0 ? `${completedTasks} de ${totalTasks}` : '0'}
          </span>
        </div>
      </div>
      
      {completedTasks > 0 && (
        <button className="btn-clear" onClick={onClearCompleted}>
          <Trash2 size={18} />
          Limpar concluídas
        </button>
      )}
    </div>
  )
}

export default TodoFooter