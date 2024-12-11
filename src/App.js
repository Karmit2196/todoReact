import {useEffect, useState} from 'react'
import TodoItem from './components/todoItem';
import Typography from '@mui/material/Typography'
import classes from './styles.module.css'
import TodoDetails from './components/todoDetails';

function App() {

  const[todoList, settodoList] = useState([]);
  const[loading, setLoading]=useState(false);
  const[errorMsg, setErrorMsg]= useState(null);
  const[todoDetails,setTodoDetails]= useState(null);
  const[openDialog, setOpenDialog]= useState(false);

  async function fetchTodos(){
    try{
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();
      if(result?.todos && result?.todos.length>0){
        settodoList(result.todos);
        setLoading(false)
      }else{
        settodoList([]);
        setLoading(false);
      }
    }
    catch(e){
      setErrorMsg('Some error occured')
    }
  }


  async function fetchDetailsOfCurrentTodo(currentToDoId){
    try{
      const apiResponse = await fetch(`https://dummyjson.com/todos/${currentToDoId}`)
      const details= await apiResponse.json();

      if(details){
        setTodoDetails(details);
        setOpenDialog(true);
      }else{
        setTodoDetails(null);
        setOpenDialog(false);
      }
console.log(details)
    }
    catch(e){
      setErrorMsg('Some error occured')

    }
  }

  useEffect(()=>{
    fetchTodos();
  },[]);

  return (
    <div className={classes.mainWrapper}>
      <Typography variant="h3" color="initial" className={classes.headerTitle}>This is Todo list project</Typography>
      <div className={classes.todoListWrapper}>
      {todoList && todoList.length>0 ? todoList.map((todoItem)=><TodoItem todo={todoItem} fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}/>):null}
      </div>
     <TodoDetails
     setOpenDialog={setOpenDialog}
     openDialog={openDialog}
     todoDetails={todoDetails}
     setTodoDetails={setTodoDetails}
     />
    </div>
  );
}

export default App;
