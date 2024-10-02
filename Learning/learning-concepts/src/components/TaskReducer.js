export function TaskReducer(tasks, action) {
  switch (action.type) {
    case "addTask":{
      return [...tasks, action.newTask];
    }
    case "delTask": {
      return tasks.filter((t) => t.id !== action.taskId);
    }
    case "editTask":
      return tasks.map((t) => {
        if (t.id === action.id) {
          return { ...t, userTask: action.newTask, dueDate: action.newDate };
        }
        return t;
      });
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function CounterReducer(number, action){
    switch (action.type) {
        case "countNumber": {
            return number + action.newNum;
        }
    }
}