
export function childrenFetched(children) {
    console.log('fetching action', children);
    return {
        type: 'FETCH_CHILDREN_SUCCESS',
        children
    };

}


export function changeChildren(children) {
    console.log('action work', children);
    return {
        type: 'CHANGE_CHILDREN',
        children
    };
}