import { useContext, useState } from "react"
import Button from "../Button/Button";
import TodoReducerContext from './../Context/TodoReducerContext';

export default function InputField() {

    const [ inputValue, setInputValue ] = useState('');

    const { dispatch } = useContext(TodoReducerContext);

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Your Next Todo Here..."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                className="outline-none border-4 rounded border-blue-500 px-3 py-2 text-base font-bold"
            />

            <Button onClickHanlder={() => {
                (inputValue) ?
                dispatch({type: "Add_Todo", payload: { todoText: inputValue, finished: false }})
                : alert("Please Enter a Todo");
                setInputValue('');
            }} text={"AddTodo"}/>
        </div>
    )
}