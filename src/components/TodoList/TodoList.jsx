import { useContext, useState } from "react"
import TodoReducerContext from "../Context/TodoReducerContext"
import Todo from "../Todo/Todo";
import Button from "../Button/Button";

export default function TodoList() {

    const { list, dispatch } = useContext(TodoReducerContext);

    const [ sortTodoList, setSortTodoList ] = useState("All");

    let renderTodoList;
    if(sortTodoList === 'Completed') {
        renderTodoList = list.filter((e) => e.finished === true);
    } 
    else if(sortTodoList === 'Pending') {
        renderTodoList = list.filter((e) => e.finished === false);
    } 
    else {
        renderTodoList = [...list];
    }
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
        <>
            <div>
                <Button onClickHanlder={() => setSortTodoList('All')} text={'All'}/>
                <Button onClickHanlder={() => setSortTodoList('Completed')} text={'Completed'}/>
                <Button onClickHanlder={() => setSortTodoList('Pending')} text={'Pending'}/>
            </div>
            <div>
                {
                list.length > 0 && 
                renderTodoList.map((e) => <Todo
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
        </>
    )
}