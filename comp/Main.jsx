import { Box } from '@mui/material'
import TaskList from './TaskList'
import Bar from './Bar'
import styles from "../styles/Main.module.css"

export default function Main() {

  return (
    <Box component='main' className={styles.main} sx={{position: 'relative'}}>
      <h1>get moving</h1>
      <TaskList />
      <Bar/>
    </Box>
  )
}