import { useEffect, useReducer } from 'react'
import './App.css'
import TodoReducerContext from './components/Context/TodoReducerContext'
import TodoReducer from './components/TodoReducer/TodoReducer'
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
import useTodoStore from './store/TodoStore';

function App() {

  // standard initialization, That I get totally

  // const savedTodoList = localStorage.getItem('TodoList');
  // const initialList = savedTodoList ? JSON.parse(savedTodoList) : [];
  // let [ list, dispatch ] = useReducer(TodoReducer, initialList);



  // Lazy initialization, takes three parameters in useReducer hook

  //   First Parameter (TodoReducer)

  //     This is the reducer function that determines how state changes based on dispatched actions.

  // Second Parameter ([])

  //     This is the initial state.
  //     When no initializer function (third parameter) is provided, useReducer starts with this value.
  //     However, when an initializer function (third parameter) is provided, this value is passed as an argument to it.

  // Third Parameter (initializer function) (Optional)

  //     A function that receives the initialState as an argument and returns the actual initial state.
  //     It is used for lazy initialization, meaning it only runs once when the component mounts, instead of every render.


  // const [ list, dispatch ] = useReducer(TodoReducer, [], () => {
  //   const savedTodoList = localStorage.getItem('TodoList');
  //   return savedTodoList ? JSON.parse(savedTodoList) : [];
  // })

  // Zustand store

  // const { list, dispatch } = useTodoStore();

  // useEffect(() => {
  //   localStorage.setItem("TodoList", JSON.stringify(list));
  // },[list])
  
  return (
  // <TodoReducerContext.Provider value={{ list, dispatch }}>
    <div className='flex flex-col items-center h-[100vh] mt-10'>
    <InputField />
    <TodoList />
    </div>
  // </TodoReducerContext.Provider>
  )
}

export default App
