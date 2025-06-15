import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleTask(state, action) {},
  },
});

console.log(taskSlice.actions);

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
