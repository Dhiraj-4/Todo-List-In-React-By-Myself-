import { useContext } from "react"
import TodoReducerContext from "../Context/TodoReducerContext"
import Todo from "../Todo/Todo";

export default function TodoList() {

    const { list, dispatch } = useContext(TodoReducerContext);

    function onEdit(id, changedData) {
        dispatch({type: "Edit_Todo", payload: { editedText: changedData, id }});
    }

    function onDel(id) {
        dispatch({type: "Del_Todo", payload: { id }});
    }

    function onFinished(id, isFinished) {
        dispatch({type: "isFinished", payload: { id, finished: isFinished}});
    }

    return (
        <div>
            {
            list.length > 0 && 
            list.map((e) => <Todo
                                key={e.id}

                                id={e.id}

                                todoData = {e.todoText}

                                isFinished = {e.finished}

                                onEdit= {(changedData) => {
                                    onEdit(e.id, changedData);
                                }}

                                onDel = {() => {
                                    onDel(e.id);
                                }}

                                onFinished = {(isFinished) => {
                                    onFinished(e.id,isFinished);
                                }}   
                            />)
            
            }
        </div>
    )
}