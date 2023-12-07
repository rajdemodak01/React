import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"hello"
    }]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text: action.payload//palload is a object which may contain id or text
            }
            state.todos.push(todo)
        },
        //we get the current state in state, and passed data in action
        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }//building reducers
})


export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer