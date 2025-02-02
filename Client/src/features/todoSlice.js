import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const createTodo = createAsyncThunk('todos/createTodo', async()=> {
    const response = axios
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