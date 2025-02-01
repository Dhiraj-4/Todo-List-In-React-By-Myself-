import { memo, useState } from "react"
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
                className="outline-none border-4 rounded border-blue-500 px-3 py-2 text-base font-bold"
            />
            : <span className="text-lg font-bold px-2">{todoData}</span>}

            <Button onClickHanlder={() => {
                (isEdit) ? ((changedData) ? onEdit(changedData) : alert("Please Enter a Todo")) :'';
                setIsEdit(!isEdit);
            }} text={(isEdit) ? "Save": "Edit"} />

            <Button onClickHanlder={() => {
                onDel();
            }} text={"Delete"}/>
                
        </div>
    )
}

export default memo(Todo);