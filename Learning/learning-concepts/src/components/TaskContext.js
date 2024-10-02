import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = TaskContext.Provider;

export const UseTaskContext=()=>{
    return useContext(TaskContext);
}
