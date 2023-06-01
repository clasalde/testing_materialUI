import React from 'react'
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import DrawerAppBar from "./components/NavBar"


function App() {
  return (
    <div>
      <DrawerAppBar/>
      <Button variant='contained'>Primary</Button>
      <Button variant='contained' disableElevation>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant="outlined" startIcon={<SendIcon />}>Send</Button>
    </div>
  )
}

export default App