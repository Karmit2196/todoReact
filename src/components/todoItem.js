import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'
function TodoItem({todo}) {
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

            <Button sx={
                {
                    backgroundColor:'#000000',
                    color:'#fff',
                    opacity:'0.9',
                    "&:hover":{
                        backgroundColor:'black',
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