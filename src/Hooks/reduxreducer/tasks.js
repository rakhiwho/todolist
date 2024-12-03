import { createSlice } from "@reduxjs/toolkit";
import { data } from "./fake";
export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    value: data,
    filter: "all tasks",
    filtering: false,
    creating: false,
   filterVal: data,
   searchTerm: "",
  },
  reducers: {
    create: (state, action) => {
      state.value.push(action.payload);
    },
    edit: (state, action) => {
      state.value.map((task) => (task) => {
        if (task.id === action.payload.id)
          if (action.payload.field === "title") {
            task.title = action.payload.value;
          }
        if (action.payload.field === "due") {
          task.dueDate = action.payload.value;
        }
        if (action.payload.field === "description") {
          task.description = action.payload.value;
        }
        if (action.payload.field === "completed") {
          task.completed = action.payload.value;
        }
      });
    },

    setCreating: (state, action) => {
      state.creating = action.payload;
    },

    setDeleting: (state, action) => {
      state.deleting = action.payload;
    },
    setFiltering: (state, action) => {
      state.filtering = action.payload;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    DELETE: (state, action) => {
      let res = window.confirm("Are you sure you want to proceed?");

      if (res) {
        state.value = state.value.filter(
          (task) => task.id !== action.payload.id
        );
      } else {
        return;
      }
    },
    setFilterVal: (state) => {
      state.filterVal = applyFilter(state.filter, state.value); // Use filter and tasks from the state
    },
    search: (state, action) => {
      const term = action.payload.toLowerCase();  
      if(term ===""){
        state.filterVal = data;
      }
      state.filterVal = state.value.filter((task) =>
        task.title.toLowerCase().startsWith(term)
      );
    },
  },
});
const applyFilter = (filter, tasks) => {
  const today = new Date().toISOString().split("T")[0];
  switch (filter) {
    case "all tasks":
      return tasks;
    case "completed":
      return tasks.filter((task) => task.completed === true);
    case "pending":
      return tasks.filter((task) => task.completed === false);
    case "overdue":
      return tasks.filter((task) => task.dueDate < today);
    default:
      return tasks;
  }
};

export const {
  create,
  DELETE,
  edit,
  setFilterVal,
  setCreating,
  setFiltering,
  setFilter,
  setEditing,
  setDeletings,
  search
} = taskSlice.actions;
export default taskSlice.reducer;
