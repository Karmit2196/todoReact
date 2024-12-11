import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

function TodoDetails({
    todoDetails,
    openDialog,
    setOpenDialog,
    setTodoDetails
}) {
  return (
    <div>
        <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
          <DialogTitle>
            {todoDetails?.todo}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{
                setTodoDetails(null)
                setOpenDialog(false)
            }} color="default">
              close
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}

export default TodoDetails