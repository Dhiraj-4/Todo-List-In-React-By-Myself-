const Add_Todo = 'Add_Todo';
const Edit_Todo = 'Edit_Todo';
const Del_Todo = 'Del_Todo';
const isFinished = 'isFinished';

function setId(state) {
    let id;
    if(state.length == 0) {
        id = 0;
    } else {
        id = state[state.length - 1].id + 1;
    }
    return id;
}
function TodoReducer(state, action) {

    if(action.type === Add_Todo) {
        let todoText = action.payload.todoText;
        let finished = action.payload.finished;
        return [
            ...state,
            {id: setId(state), todoText: todoText, finished: finished}
        ];
    }
    else if(action.type === Edit_Todo) {
        const id = action.payload.id;
        const editedText = action.payload.editedText;
        const updatedList = state.map((e) => {
            if(e.id === id) {
                e.todoText = editedText;
            }
            return e;
        })

        return updatedList;
    }
    else if(action.type === Del_Todo) {
        const id = action.payload.id;
        const updatedList = state.filter((e) => e.id !== id);

        return updatedList;
    }
    else if(action.type === isFinished) {
        const id = action.payload.id;
        const finished = action.payload.finished;
        const updatedList = state.map((e) => {
            if(e.id === id) {
                e.finished = finished;
            }
            return e;
        });
        return updatedList;
    }
}

export default TodoReducer;