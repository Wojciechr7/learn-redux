export const children = (state = [], action) => { // (1)
    switch (action.type) { // (2)
        case 'FETCH_CHILDREN_SUCCESS':
            console.log('fetching reducer', action.children);
            return action.children;
        case 'CHANGE_CHILDREN':
            console.log('reducer changes', action.children);
            return action.children;
        default:
            return state
    }
};