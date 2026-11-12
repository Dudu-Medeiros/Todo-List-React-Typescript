import './App.css'

import {Check} from 'lucide-react'
import { useState } from 'react'

import TodoAdd from './components/TodoAdd'

function App() {

  const [tasks, setTasks] = useState<string[]>([])

  function addTask(title: string) {
    setTasks((previousTasks) => [...previousTasks, title])
  }

  return (
    <>
      <div className='box-todo'>
        <div className="header-box">
          <Check className='icon-check'/>
          <div className="text-box">
            <h2>Todo <span className='destaque'>List</span></h2>
            <p>Organize suas tarefas de forma simples 🚀</p>
          </div>
        </div>

        <TodoAdd onAddTask={addTask} />

        {tasks.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
        
      </div>
    </>
  )
}

export default App
