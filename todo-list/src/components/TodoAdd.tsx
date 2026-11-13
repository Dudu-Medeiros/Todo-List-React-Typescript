import './TodoAdd.css'
import { useState, useEffect } from 'react'
import { Plus, Check, X } from 'lucide-react'
import type { ITask } from '../App'

interface TodoAddProps {
  onAddTask: (texto: string) => void
  editingTask: ITask | null
  onCancelEdit: () => void
}

function TodoAdd({ onAddTask, editingTask, onCancelEdit }: TodoAddProps) {
  const [texto, setTexto] = useState('')

  useEffect(() => {
    if (editingTask) {
      setTexto(editingTask.title)
    } else {
      setTexto('')
    }
  }, [editingTask])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const taskText = texto.trim()
    
    if (!taskText) return

    onAddTask(taskText)
    setTexto('')
  }

  return (
    <form onSubmit={handleSubmit} className="todo-add-form">
      <input 
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      {editingTask ? (
        <div className="edit-actions">
          <button type="button" className="btn-cancel" onClick={onCancelEdit}>
            <X size={16} /> Cancelar
          </button>
          <button type="submit" className="btn-save">
            <Check size={16} /> Salvar
          </button>
        </div>
      ) : (
        <button type="submit" className="btn-add">
          <Plus size={16} /> Adicionar
        </button>
      )}
    </form>
  )
}

export default TodoAdd