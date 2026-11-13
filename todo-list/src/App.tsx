import './App.css'
import { Check } from 'lucide-react'
import { useState } from 'react'

import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'

export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [editingTask, setEditingTask] = useState<ITask | null>(null)

  function addTask(title: string) {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) => (t.id === editingTask.id ? { ...t, title } : t))
      )
      setEditingTask(null)
      return
    }

    const newTask: ITask = {
      id: crypto.randomUUID(),
      title: title,
      isCompleted: false
    }
    setTasks((prev) => [...prev, newTask])
  }

  function toggleTask(taskId: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    )
  }

  function deleteTask(taskId: string) {
    setTasks((prev) => prev.filter((task) => task.id !== taskId))
  }

  function editTask(task: ITask) {
    setEditingTask(task)
  }

  function cancelEdit() {
    setEditingTask(null)
  }

  return (
    <div className="box-todo">
      <div className="header-box">
        <Check className="icon-check" />
        <div className="text-box">
          <h2>
            Todo <span className="destaque">List</span>
          </h2>
          <p>Organize suas tarefas de forma simples 🚀</p>
        </div>
      </div>

      <TodoAdd 
        onAddTask={addTask} 
        editingTask={editingTask} 
        onCancelEdit={cancelEdit} 
      />

      <TodoList 
        tasks={tasks} 
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
    </div>
  )
}

export default App