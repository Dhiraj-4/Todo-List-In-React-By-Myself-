import { create } from "zustand";
import TodoReducer from "../components/TodoReducer/TodoReducer";

const useTodoStore = create((set,get) => ({
    list: JSON.parse(localStorage.getItem("TodoList")) || [],

    dispatch: (action) => {
        const newState = TodoReducer(get().list, action);
        localStorage.setItem('TodoList', JSON.stringify(newState));
        set((state) => {
            return {
                ...state,
                list: newState,
            }
        })
    }
}));

// const todoStore = create((set) => ({
    
//     setList: (list) => {
//         set((state) => {
//             return {
//                 ...state,
//                 list,
//             }
//         })
//     },

//     setDispatch: (dispatch) => {
//         set((state) => {
//             return {
//                 ...state,
//                 dispatch,
//             }
//         })
//     }
// }));

// export default todoStore;

export default useTodoStore;