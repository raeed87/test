import React, { useState } from 'react';

const HomePage = () => {
  const initialTodos = [
    {"id":1,"todo":"Do something nice for someone you care about","completed":false,"userId":152},
    {"id":2,"todo":"Memorize a poem","completed":true,"userId":13},
    {"id":3,"todo":"Watch a classic movie","completed":true,"userId":68},
    {"id":4,"todo":"Watch a documentary","completed":false,"userId":84},
    {"id":5,"todo":"Invest in cryptocurrency","completed":false,"userId":163},
    {"id":6,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false,"userId":69},
    {"id":7,"todo":"Solve a Rubik's cube","completed":true,"userId":76},
    {"id":8,"todo":"Bake pastries for yourself and neighbor","completed":true,"userId":198},
    {"id":9,"todo":"Go see a Broadway production","completed":false,"userId":7},
    {"id":10,"todo":"Write a thank you letter to an influential person in your life","completed":true,"userId":9},
    {"id":11,"todo":"Invite some friends over for a game night","completed":false,"userId":104},
    {"id":12,"todo":"Have a football scrimmage with some friends","completed":false,"userId":32},
    {"id":13,"todo":"Text a friend you haven't talked to in a long time","completed":true,"userId":2},
    {"id":14,"todo":"Organize pantry","completed":false,"userId":46},
    {"id":15,"todo":"Buy a new house decoration","completed":true,"userId":105},
    {"id":16,"todo":"Plan a vacation you've always wanted to take","completed":true,"userId":162},
    {"id":17,"todo":"Clean out car","completed":false,"userId":71},
    {"id":18,"todo":"Draw and color a Mandala","completed":true,"userId":18}, // Corrected userId for consistency
    {"id":19,"todo":"Create a cookbook with favorite recipes","completed":true,"userId":53},
    {"id":20,"todo":"Bake a pie with some friends","completed":false,"userId":162},
    {"id":21,"todo":"Create a compost pile","completed":false,"userId":13},
    {"id":22,"todo":"Take a hike at a local park","completed":true,"userId":37},
    {"id":23,"todo":"Take a class at local community center that interests you","completed":true,"userId":65},
    {"id":24,"todo":"Research a topic interested in","completed":true,"userId":130},
    {"id":25,"todo":"Plan a trip to another country","completed":false,"userId":140},
    {"id":26,"todo":"Improve touch typing","completed":false,"userId":178},
    {"id":27,"todo":"Learn Express.js","completed":false,"userId":194},
    {"id":28,"todo":"Learn calligraphy","completed":false,"userId":80},
    {"id":29,"todo":"Have a photo session with some friends","completed":true,"userId":91},
    {"id":30,"todo":"Go to the gym","completed":true,"userId":142}
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return; // Don't add empty todos

    const newId = Math.max(...todos.map(todo => todo.id)) + 1; // Simple ID generation
    const todoItem = {
      id: newId,
      todo: newTodo,
      completed: false,
      userId: 1 // Assuming a default user for newly added items
    };
    setTodos([todoItem, ...todos]); // Add new todo to the top
    setNewTodo(''); // Clear input field
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  const completedTodos = todos.filter(todo => todo.completed);
  const incompleteTodos = todos.filter(todo => !todo.completed);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.appTitle}>My To-Do List</h1>
        <p style={styles.date}>{formattedDate}</p>
      </header>

     

      {/* Task List */}
      <div style={styles.taskListContainer}>
        {incompleteTodos.length === 0 && completedTodos.length === 0 ? (
          <p style={styles.emptyState}>You're all caught up! Time to relax or add new tasks.</p>
        ) : (
          <>
            {incompleteTodos.length > 0 && (
              <h2 style={styles.sectionTitle}>Things To Do</h2>
            )}
            {incompleteTodos.map(todo => (
              <div key={todo.id} style={styles.todoItem}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                  style={styles.checkbox}
                />
                <span style={styles.todoText}>
                  {todo.todo}
                </span>
                <button onClick={() => handleDeleteTodo(todo.id)} style={styles.deleteButton}>
                  &#x2715; {/* X mark */}
                </button>
              </div>
            ))}

            {completedTodos.length > 0 && (
              <h2 style={styles.sectionTitle}>Completed Tasks ({completedTodos.length})</h2>
            )}
            {completedTodos.map(todo => (
              <div key={todo.id} style={{ ...styles.todoItem, ...styles.completedTodoItem }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                  style={styles.checkbox}
                />
                <span style={{ ...styles.todoText, textDecoration: 'line-through', color: '#999' }}>
                  {todo.todo}
                </span>
                <button onClick={() => handleDeleteTodo(todo.id)} style={styles.deleteButton}>
                  &#x2715;
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

// --- Basic Inline Styles ---
const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    maxWidth: '600px',
    margin: '40px auto',
    padding: '25px',
    backgroundColor: '#f7f9fc',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee',
  },
  appTitle: {
    fontSize: '2.5em',
    color: '#5c67f2',
    marginBottom: '8px',
  },
  date: {
    fontSize: '1em',
    color: '#666',
  },
  addTodoSection: {
    display: 'flex',
    marginBottom: '30px',
    gap: '10px',
  },
  addTodoInput: {
    flexGrow: 1,
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1em',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  addTodoInputFocus: { // This would typically be handled with CSS pseudo-classes
    borderColor: '#5c67f2',
  },
  addButton: {
    padding: '12px 25px',
    backgroundColor: '#5c67f2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  addButtonHover: { // This would typically be handled with CSS pseudo-classes
    backgroundColor: '#4a54e6',
  },
  taskListContainer: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '1.4em',
    color: '#444',
    marginBottom: '15px',
    borderBottom: '1px solid #eee',
    paddingBottom: '8px',
    marginTop: '25px',
  },
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '15px 20px',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    borderLeft: '5px solid #5c67f2', // Accent color for incomplete
  },
  completedTodoItem: {
    opacity: 0.7,
    borderLeft: '5px solid #a8dadc', // Different accent for completed
  },
  todoItemHover: { // This would typically be handled with CSS pseudo-classes
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  checkbox: {
    marginRight: '15px',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    accentColor: '#5c67f2', // Changes the color of the checkbox itself
  },
  todoText: {
    flexGrow: 1,
    fontSize: '1.1em',
    wordBreak: 'break-word',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ff6b6b',
    fontSize: '1.2em',
    cursor: 'pointer',
    marginLeft: '15px',
    padding: '5px',
    borderRadius: '50%',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  },
  deleteButtonHover: { // This would typically be handled with CSS pseudo-classes
    backgroundColor: '#ffe3e3',
    color: '#e63946',
  },
  emptyState: {
    textAlign: 'center',
    color: '#777',
    fontSize: '1.2em',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#e9eff7',
    borderRadius: '8px',
  },
};

export default HomePage;