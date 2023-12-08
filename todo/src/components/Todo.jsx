import React from "react";

const Todo = ({ todo, removeTodo }) => {
   return (
            <div className="todo" style={{textDecoration: todo.iscompleted ? "line-through": ""}}>
                <div className="content">
                  <p>{todo.text}</p>
                  <p className="category">({todo.category})</p>
                </div>
                <div>
                  <button onClick={() => completeTodo(todo.id)}>completar</button>
                  <button className="remove" onClick={()=> removeTodo(todo.id)}>x</button>
                </div>
                </div>
    );
   };
      
      export default Todo;
      