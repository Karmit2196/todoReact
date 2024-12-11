import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'
function TodoItem({todo,fetchDetailsOfCurrentTodo}) {
  return (
    <Card sx={{
        maxWidth:350,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'

    }}>
        <CardContent>
            <Typography variant="h6"  color={'text.secondary'}>
                {todo?.todo}
            </Typography>
        </CardContent>

            <Button 
            onClick={()=>fetchDetailsOfCurrentTodo(todo?.id)}
            sx={
                {
                    backgroundColor:'#000000',
                    color:'#fff',
                    opacity:'0.9',
                    ":hover":{
                        backgroundColor:'green',
                        color:'white'
                    }

                }
            }>
                Show Details
            </Button>

    </Card>
  )
}

export default TodoItem