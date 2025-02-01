export default function Button({ onClickHanlder, text }) {
    
    return (
        <button 
        onClick={onClickHanlder}
        className="bg-blue-500 rounded px-2 py-1 m-1 text-lg font-bold"
        >{text}</button>
    )
}