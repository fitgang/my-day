import Head from 'next/head'
import Task from '../comp/Task'
import InpustTask from '../comp/InputTask'
import { useState } from 'react'

export default function Home() {
  const [viewInputForm, setViewOfInputForm] = useState(false);

  return (
    <>
      <Head>
        <title>my day</title>
        <meta name="description" content="Organize your day" />
      </Head>

      <main>
        <h1>get moving</h1>
        <ul id="task-container">
          <Task/>
          <Task/>
        </ul>
      </main>

      <InpustTask view={viewInputForm} hideInputForm={hideInputForm} handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
      
      <button id="add-task-btn" type='button' onClick={() => setViewOfInputForm(prev => !prev)}>+</button>
    </>
  )

  function handleSubmit(e) {
    // Validate data
    // Raise warning if errors found
    // Else Store to database
    // Change UI accordingly
    // Inform user about success
    // Raise warning if errors found
  }

  function handleInputChange() {
    // If the input has focus
      // then validate data 
        // If errors found, raise warning
        // Else do nothing
    // Else Do nothing
  }

  function hideInputForm() {
    setViewOfInputForm(false)
  }
}
