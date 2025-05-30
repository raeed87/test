 import React from 'react'
 
 function Additem() {
   return (
     <>{/* Add New Task */}
     <div style={styles.addTodoSection}>
       <input
         type="text"
         placeholder="Add a new task..."
         value={newTodo}
         onChange={(e) => setNewTodo(e.target.value)}
         onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
         style={styles.addTodoInput}
       />
       <button onClick={handleAddTodo} style={styles.addButton}>
         Add Task
       </button>
     </div></>
   )
 }
 
 export default Additem