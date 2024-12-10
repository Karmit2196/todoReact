import {useEffect, useState} from 'react'
import TodoItem from './components/todoItem';
import Typography from '@mui/material/Typography'

function App() {

  const[todoList, settodoList] = useState([]);
  const[loading, setLoading]=useState(false);
  const[errorMsg, setErrorMsg]= useState(null);


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

  useEffect(()=>{
    fetchTodos();
  },[]);

  return (
    <div className="App">
      <Typography variant="h3" color="initial">This is Todo list project</Typography>
      {todoList && todoList.length>0 ? todoList.map((todoItem)=><TodoItem todo={todoItem}/>):null}
    </div>
  );
}

export default App;
