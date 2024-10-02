import React, { useState } from "react";
import { UseTaskContext } from "./TaskContext";

const TaskForm = () => {
  const { dispatch } = UseTaskContext();
  const [taskUser, setTaskUser] = useState("");
  const [taskDate, setTaskDate] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
        type:'addTask',
        newTask: {id: Math.random(), userTask: taskUser, dueDate: taskDate},
    })
    setTaskUser("");
    setTaskDate('');
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={taskUser}
        onChange={(e) => setTaskUser(e.target.value)}
        placeholder="Enter Your Task ..."
      />
      <input type="date" name="due_date" id="due_date" value={taskDate} onChange={(e)=>setTaskDate(e.target.value)} placeholder="Any Due Date ..." />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TaskForm;
