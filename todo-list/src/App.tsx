import './App.css'
import { Check } from 'lucide-react'
import { useState } from 'react'

import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function addTask(title: string) {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      title: title,
      isCompleted: false
    }
    setTasks((previousTasks) => [...previousTasks, newTask])
  }

  function toggleTask(taskId: string) {
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted }
        }
        return task
      })
    )
  }

  return (
    <div className="box-todo">
      <div className="header-box">
        <Check className="icon-check" />
        <div className="text-box">
          <h2>Todo <span className="destaque">List</span></h2>
          <p>Organize suas tarefas de forma simples 🚀</p>
        </div>
      </div>
      <TodoAdd onAddTask={addTask} />
      <TodoList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  )
}

export default App