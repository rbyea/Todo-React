import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
    text: 'Первый таск',
    completed: true,
    categoery: true,
  },
];

export const counterSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action);
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          text: action.payload.input,
          completed: action.payload.check,
          category: true,
        },
      ];
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    changeCheckbox: (state, action) => {
      return state.map((obj) =>
        obj.id === action.payload
          ? { ...obj, completed: !obj.completed, category: !obj.completed }
          : obj,
      );
    },
    tooglerCompleted: (state, action) => {
      return state.map((obj) => {
        return { ...obj, completed: action.payload };
      });
    },
    clearTasks: (state) => {
      return state.filter((obj) => obj.id <= 0);
    },
  },
});

export const { addTask, removeTask, changeCheckbox, tooglerCompleted, clearTasks } =
  counterSlice.actions;

export default counterSlice.reducer;
