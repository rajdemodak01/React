import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],

    //functionality of these functions will be define in another file(App.jsx)
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    //whenever we use useContext we need to provide the referance like (TodoContext)
    return useContext(TodoContext)
}


//buiilding a provider which will be used later
export const TodoProvider=TodoContext.Provider