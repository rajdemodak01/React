import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:""
    }]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text: action.payload//payload is a object which may contain id or text
            }
            state.todos.push(todo)
        },
        //we get the current state in state, and passed data in action
        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload; // Destructure id and text from payload
            const existingTodo = state.todos.find((todo) => todo.id === id); // Find the todo by id
            if (existingTodo) {
              existingTodo.text = text; // Update the text for the matched todo
            }
          },
    }//building reducers
})


export const {addTodo,removeTodo, updateTodo}=todoSlice.actions

export default todoSlice.reducer