import './App.css';
import {useState} from 'react'
function App() {
//   const [count,setCount] = useState(0);
//  function increase(){
//      setCount(count+1)
//   }
//   function decrease(){
//     setCount(count-1)
//  }
//  function reset(){
//   setCount(0) // set to zero
// }
//   return (
//   <div>
//     <button onClick={increase}>increase</button>
//     <button onClick={decrease}>decrease</button>
//     <button onClick={reset}>reset</button>
//      {count}
//   </div>

const [todoList ,setTodoList]=useState([])   //list store hogi idhr
const [newTask ,setNewTask]=useState("")   // new task rerender krny liye use hoga

const handleChange =(e)=>{
  setNewTask(e.target.value); // value target kr rahy grab info about input
}
const addTask=() =>{
   
    const task = {
    id:todoList.length === 0 ? 1 : todoList[todoList.length - 1].id+1, //it assigns an ID of 1. Otherwise, it assigns an ID one greater than the ID of the last task in the list. This is a common approach for generating unique IDs for new items 
    taskName: newTask,
    completed:false
    }
    //  const newTodoList = [...todoList,newTask];
    //  setTodoList(newTodoList);
    setTodoList([...todoList,task])
}
const deleteTask=(id)=>{
  setTodoList(todoList.filter((task)=> task.id !== id));
  //which means it will keep all tasks whose id does not match the provided id.

}
const completedTask = (id) => {
  setTodoList(todoList.map((task) => {
    if (task.id === id) {
      return { ...task, completed: true };
    } else {
      return task;
    }
  }));
}


return (
<>
<div className='addTask'>
<input onChange={handleChange}/>
<button onClick={addTask}>Add Task</button>
</div>
<div className='list'>
{todoList.map((task)=>{
  return (
    <div style={{ backgroundColor: task.completed ? "green" : "white" }}>
      <h1>{task.taskName}</h1>
      <button onClick={() => deleteTask(task.id)}>X</button>
      <button onClick={() => completedTask(task.id)}>Completed</button>
    </div>
  )
})}
</div>
</>
  );
}


export default App;
