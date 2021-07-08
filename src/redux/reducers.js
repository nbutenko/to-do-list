const initialState = {
    tasks: []
}

const taskList = (state= initialState, action ) => {
    switch (action.type) {
        case "CREATE":
            return  {...state, tasks: [...state.tasks, action.payload]};
        default: return state;
    }

}

export default taskList;