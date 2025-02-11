import { useState } from "react"
import Button from "../Button/Button";

function Todo({ todoData, onEdit, isFinished, onFinished, onDel}) {

    const [ isEdit, setIsEdit ] = useState(false);
    
    const [ changedData, setChangedData ] = useState();

    return (
        <div>
            <input 
            type="checkbox"
            checked={isFinished}
            onChange={() => onFinished(!isFinished)}
            className="h-5 w-5 "
            />

            {(isEdit) ? <input type="text" 
                onChange={(e) => setChangedData(e.target.value)}
                placeholder="Enter Changed Todo Here..."
                value={changedData}
                className="outline-none border-4 rounded border-blue-500 px-3 py-2 text-base font-bold"
            />
            : (isFinished) ? <span className="text-lg font-bold px-2"><s className="decoration-2">{todoData}</s></span> : <span className="text-lg font-bold px-2">{todoData}</span>}

            <Button onClickHanlder={() => {
                (isEdit) ? ((changedData.trim()) ? onEdit(changedData.trim()) : alert("Please Enter a Todo")) :'';
                setIsEdit(!isEdit);
                setChangedData(todoData);
            }} text={(isEdit) ? "Save": "Edit"} />

            <Button onClickHanlder={() => {
                onDel();
            }} text={"Delete"}/>
                
        </div>
    )
}

export default Todo;