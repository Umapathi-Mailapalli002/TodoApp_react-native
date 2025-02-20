import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance.js';

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async ({title, description}, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.post('/', {
        title, description
      });
      return response.data;
    } catch (error) {
      // Extract a plain error message (or a simple object)
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Error on adding todo';
      return rejectWithValue(errorMessage);
    }
  },
);

export const getAllTodos = createAsyncThunk(
  'todos/getAllTodos',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.get('/');
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          'Error on fetching todos',
      );
    }
  },
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({title, description, id}, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.patch(`/${id}`, {
        title,
        description,
      });
      return {...response.data, id};
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          'Error on updating todo',
      );
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async ({id}, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.delete(`/${id}`);
      return {message: response.data.message, id};
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          'Error on deleting todo',
      );
    }
  },
);

export const toggleComplete = createAsyncThunk(
  'todos/toggleComplete',
  async ({id, isCompleted}, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.patch(`/toggle/${id}`, {isCompleted});
      console.log(response.data.data);
      return {...response.data, id};
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          'Error on toggling as completed todo',
      );
    }
  },
);

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Add Todo
      .addCase(createTodo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.unshift(action.payload.data);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get All Todos
      .addCase(getAllTodos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Todo
      .addCase(updateTodo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        const {id, ...updatedData} = action.payload;
        const index = state.todos.findIndex(todo => todo._id === id);
        if (index !== -1) {
          state.todos[index] = {...state.todos[index], ...updatedData};
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Todo
      .addCase(deleteTodo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        const {id} = action.payload
        console.log(action.payload);
        state.todos = state.todos.filter(
          todo => todo._id !== id,
        );
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Toggle Complete
      .addCase(toggleComplete.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleComplete.fulfilled, (state, action) => {
        state.loading = false;
        // Assume API returns updated todo with _id and isCompleted
        const updatedTodo = action.payload;
        const index = state.todos.findIndex(
          todo => todo._id === updatedTodo._id,
        );
        if (index !== -1) {
          state.todos[index] = {...state.todos[index], ...updatedTodo};
        }
      })
      .addCase(toggleComplete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
