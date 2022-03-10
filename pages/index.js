import { Box, Button, Paper } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import SplitButton from '../components/splitButton'
import styles from '../styles/Home.module.css'

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merfdsfdsge",
];

export default function Home(props) {
  const items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]


  return (
    <Box sx={{
      backgroundColor: "blue",
      height: "100vh",
      width: "100%",
    }}>

    <Carousel>
      {
        items.map( (item, i) => <Item key={i} item={item} /> )
      }
    </Carousel>
      </Box>
  //  <Box>     
  //    <Button variant="contained">index.js</Button>
  //    <SplitButton title={"test"} options={options}/>
  //    <Box sx={{
  //      backgroundColor: "blue",
  //      height: "100vh"
  //    }}>
  //    </Box>
  //  </Box>
  )
}

function Item(props)
{
    return (
   
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}