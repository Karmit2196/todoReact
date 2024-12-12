import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../src/components/addTodo';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <TodoApp />
    </>
  );
}

export default App;
