import { Box, Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import SplitButton from '../components/splitButton'
import styles from '../styles/Home.module.css'

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merfdsfdsge",
];

export default function Home() {
  return (
   <Box>
     <Button variant="contained">index.js</Button>
     <SplitButton title={"test"} options={options}/>
   </Box>
  )
}
