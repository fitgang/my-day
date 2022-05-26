import Task from '../comp/Task'
import InpustTask from '../comp/InputTask'
import { useSelector } from 'react-redux'

export default function Main() {
  const store = useSelector(store => store);
  console.log(store)
  return (
    <>
      <main>
        <h1>get moving</h1>
        <ul id="task-container">
          <Task />
          <Task />
        </ul>
      </main>

      {/* <InpustTask hideInputForm={hideInputForm} handleSubmit={handleSubmit} handleInputChange={handleInputChange} /> */}

      {/* <button id="add-task-btn" type='button' onClick={() => setViewOfInputForm(prev => !prev)}>+</button> */}
    </>
  )
}