import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const createTodo = createAsyncThunk('todos/createTodo', async({title, content}, {rejectWithValue})=> {
   try {
     const response = await axiosInstance.post('/', {title, content})
     return response.data;
   } catch (error) {
    rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Error on adding todo"
    )
   }
})

export const getAllTodos = createAsyncThunk('todos/getAllTodos', async(_,rejectWithValue) => {
    try {
        const response = await axiosInstance.get('/')
        return response.data;
    } catch (error) {
        rejectWithValue(
            error.response?.data?.message ||
              error.message ||
              "Error on fetching todos"
        )
    }
})

export const updateTodo = createAsyncThunk('todos/updateTodo', async({title, content, id}, rejectWithValue) => {
    try {
        const response = await axiosInstance.patch(`/${id}`, {title, content})
        return response.data;
    } catch (error) {
        rejectWithValue(
            error.response?.data?.message ||
              error.message ||
              "Error on updating todo"
        )
    }
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async({id}, {rejectWithValue}) => {
    try {
        const response = await axiosInstance.delete(`/${id}`)
        return response.data;
    } catch (error) {
        rejectWithValue(
            error.response?.data?.message ||
              error.message ||
              "Error on deleting todo"
        ) 
    }
})

export const toggleComplete = createAsyncThunk('todos/toggleComplete', async({id, isCompleted}, rejectWithValue) => {
    try {
        const response = await axiosInstance.post(`/${id}`, {isCompleted})
        return response.data;
    } catch (error) {
        rejectWithValue(
            error.response?.data?.message ||
              error.message ||
              "Error on toggling as completed todo"
        ) 
    }
})
const initialState = {
    todos: [],
    isLoading: true,
    error: null,
}

const todoSclice = createSlice({
    name: "Todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase
    }
})