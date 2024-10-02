import React, { useState } from "react";
import { UseTaskContext } from "./TaskContext";

const TaskHistory = ({ onDeleteTask }) => {
    const { tasks, dispatch } = UseTaskContext();
    const [text, updateText] = useState("");
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editDate, setEditDate] = useState(null);

    const onSubmitEdit = (e) => {
        e.preventDefault();

        dispatch({
            type: "editTask",
            id: editingTaskId,
            newTask: text,
            newDate: editDate,
        });

        setEditingTaskId(null);
    };

    return (
        <div>
            {tasks.length > 0
                ? tasks.map((task) => (
                    <ul key={task.id}>
                        <li className="task-history">
                            <input type="checkbox" name="task_status" id="task_status"  />

                            {editingTaskId === task.id ? (
                                <form onSubmit={onSubmitEdit} style={{display:"flex", flexDirection: "column", gap:'4px'}}>
                                    <input
                                        type="text"
                                        value={text}
                                        onChange={(e) => updateText(e.target.value)}
                                        placeholder="Edit your task"
                                    />
                                    <input type="date" name="edit_date" id="edit_date" value={editDate} onChange={(e)=>setEditDate(e.target.value)} />
                                    <button type="submit">Save</button>
                                </form>
                            ) : (
                                <>
                                <h4>{task.userTask}</h4>
                                <p>{task.dueDate}</p>
                                </>
                            )}
                            <button
                                onClick={() => {
                                    setEditingTaskId(task.id);
                                    updateText(task.userTask);
                                    setEditDate(task.dueDate);
                                }}
                            >
                                Edit
                            </button>
                            <button onClick={() => onDeleteTask(task.id)}>Del</button>
                        </li>
                    </ul>
                ))
                : "No History Found!"}
        </div>
    );
};

export default TaskHistory;
