import './TodoAdd.css'

import { useState } from 'react'
import { Plus } from 'lucide-react'

interface TodoAddProps {
        onAddTask: (texto: string) => void
    }

function TodoAdd({onAddTask}: TodoAddProps) {

    const [texto, setTexto] = useState('')

    /* Evento disparado que captura os itens e zera em caso de sucesso o input */
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const taskText = texto.trim()

        if (!taskText) return

        onAddTask(taskText)
        setTexto('')
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Digite uma nova tarefa...'
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
        />
        <button type='submit'> <Plus size={16}/> Adicionar</button>
      </form>
    </>
  )
}

export default TodoAdd
