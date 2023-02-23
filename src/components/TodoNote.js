import React, { useState } from 'react';

function TodoNote() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (todo !== '') {
      setTodoList([...todoList, todo]);
      setTodo('');
    }
  }

  const handleDeleteTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="col-3">
      <h4>Todo List</h4>
      <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo} 
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoNote;
