 import { useState } from "react";
 import TodoForm from "./components/Todoform";
  import Todo from ".components/Todo";

 import Search from "./components/Search";
 import "./app.css";

function App() {
  const [todos, SetTodos] = useState([
    {
      id: 1,
      text: "criar funicionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text:"Estudar React",
      category:"Estudos",
      isCompleted:false,
    },
  ]);
  
  const [search,setSearch] =useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("ASC");


const addTodo = (text, category) => {

  const newTodos = [
    ...todos,
    {
      id: Math.floor(math.random()* 10000),
      text,
      category,
      isCompleted:false,
    },
  ];
  SetTodos(newTodos);
};
 const removeTodo = (id)=>{
  constnewTodos = [...todos]
  const fillteredTodos = newTodos.filter((todo) => todo.id !== id ? todo: null);
  SetTodos(filterredTodos);
 };

 const completeTodo =(id) => {
     const newTodos = [...todos]
     newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
     SetTodos(newTodos);
 }
;
  return (
  <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter Filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className="todo-list">
      {todos .filter((todo) =>filter === "All" ? true : filter === "Completed" ? todo.iscompleted : !todo.iscompleted)
      .filter((todo)=> todo.text.toLowerCase().Includes(search.toLowerCase()))
      .sort((a, b) =>  "ASC"? a.text.localecompare(b.text):b.text.localecompare(a.text))
      .map((todo)=>(
        <Todo key={todo.id} todo={todo} removeTodo= {removeTodo} completeTodo={completeTodo} />
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>
  );
}

export default App;
