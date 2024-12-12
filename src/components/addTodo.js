import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// TodoList Component
const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index}>
          <ListItemText primary={todo} />
          <IconButton edge="end" onClick={() => onEdit(index, todo)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => onDelete(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

// TodoApp Component
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [disable, setDisable] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setDisable(value.trim() === '');
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
      setDisable(true);
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index, currentValue) => {
    setEditIndex(index);
    setEditValue(currentValue);
    setIsDialogOpen(true);
  };

  const handleSaveEdit = () => {
    setTodos(todos.map((todo, index) => (index === editIndex ? editValue : todo)));
    setIsDialogOpen(false);
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center">
        Todo List
      </Typography>
      <TextField
        label="Add New Todo"
        variant="outlined"
        fullWidth
        margin="normal"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddTodo}
        disabled={disable}
      >
        Add Todo
      </Button>
      <TodoList todos={todos} onEdit={handleEditTodo} onDelete={handleDeleteTodo} />

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit your todo item below:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Todo"
            type="text"
            fullWidth
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TodoApp;
