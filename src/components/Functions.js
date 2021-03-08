
export function numTodosDone(arr) {
    return arr.reduce((sum, item) =>
        item.completed ? sum + 1 : sum
    , 0);
}

export const checkAllItem = (stateArr, handleState) => {
    handleState(
        stateArr.length === numTodosDone(stateArr) ?
            stateArr.map(item => { return { ...item, completed: false }}) :
            stateArr.map(item => { return { ...item, completed: true }})
    );
}

export const onKeyUp = (stateArr, handleState, event) => {
    let value = event.target.value;

    if (event.key === "Enter" && value.trim() !== '') {
        handleState([
            {
                title: value,
                completed: false
            },
            ...stateArr
        ]);
    }
}

export const clickItem = (stateArr, handleState, index) => {
    handleState([
        ...stateArr.slice(0, index),
        {
            ...stateArr[index],
            completed: !stateArr[index].completed
        },
        ...stateArr.slice(index + 1)
    ]);
};

export const destroyItem = (stateArr, handleState, index) => {
    handleState([
        ...stateArr.slice(0, index),
        ...stateArr.slice(index + 1)
    ]);
}