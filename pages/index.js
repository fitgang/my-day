import Head from 'next/head'
import Task from '../comp/Task'
import InpustTask from '../comp/InputTask'
import { useState } from 'react'
import { validateData } from '../public/dataFunctions';

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

  function handleInputChange(e) {
    const inputElem = e.target;
    // If the input has focus
    if (document.activeElement === inputElem){
      // then validate data 
      const errors = validateInput(inputElem);
      // If errors found, raise warning
      if (errors.length !== 0) {
        showErrorToUser()
      }
      // Else do nothing
    }
    // Else Do nothing
  }

  function validateInput(inputElem) {
    if (inputElem.type.includes("text")) {
      return validateData(inputElem.value, "text")
    }
    return validateData(inputElem.value, "datetime")
  }

  function showErrorToUser() {

  }

  function hideInputForm() {
    setViewOfInputForm(false)
  }
}
