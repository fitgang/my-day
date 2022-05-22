import Head from 'next/head'
import Task from '../comp/Task'
import InpustTask from '../comp/InputTask'
import { useState } from 'react'

export default function Home() {
  const [viewInputForm, setViewOfInputForm] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Organize your day" />
      </Head>

      <main>
        <h1>get moving</h1>
        <ul id="task-container">
          <Task/>
          <Task/>
        </ul>
      </main>

      <InpustTask view={viewInputForm}/>
    </>
  )
}
