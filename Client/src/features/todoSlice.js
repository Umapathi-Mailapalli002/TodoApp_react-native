import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const createTodo = createAsyncThunk('todos/createTodo', async()=> {

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