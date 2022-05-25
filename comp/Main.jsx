import Task from '../comp/Task'
import InpustTask from '../comp/InputTask'
import { useState } from 'react'

export default function Main() {
  const [viewInputForm, setViewOfInputForm] = useState(false);
  return (
    <>
      <main>
        <h1>get moving</h1>
        <ul id="task-container">
          <Task />
          <Task />
          { }
        </ul>
      </main>

      <InpustTask view={viewInputForm} hideInputForm={hideInputForm} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />

      <button id="add-task-btn" type='button' onClick={() => setViewOfInputForm(prev => !prev)}>+</button>
    </>
  )
}