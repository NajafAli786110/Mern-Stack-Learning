import './App.css'
import { useReducer } from 'react';
import TaskForm from './components/TaskForm';
import { TaskContextProvider } from './components/TaskContext';
import TaskHistory from './components/TaskHistory';
import { CounterReducer, TaskReducer } from './components/TaskReducer';
import CounterApp from './components/CounterApp';

function App() {
  const initialTask = [
    {
      id: 0,
      userTask: "Demo Task",
      dueDate: "2024-1-1",
    }
  ]

  // Task is your state, Dispatch is like your action
  const [tasks, dispatch] = useReducer(TaskReducer, initialTask);
  const [count, dispatchCount] = useReducer(CounterReducer, 0);

  function onDeleteTask(id) {
    dispatch({
      type: "delTask",
      taskId: id,
    })
  }

  function onCount(num) {
    dispatchCount({
      type: "countNumber",
      newNum: num,
    })
  }

  return (
    <TaskContextProvider value={{ tasks, dispatch, count, dispatchCount }}>
      <div className='main-container'>
        <h1>Task App</h1>
        <TaskForm />
        <p>History</p>
        <TaskHistory onDeleteTask={onDeleteTask} />
        <p>Counter App</p>
        <CounterApp onCount={onCount} />
      </div>
    </TaskContextProvider>
  )
}

export default App;