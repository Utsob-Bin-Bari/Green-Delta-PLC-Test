export const TEXT_ADDED = "textAdded";


export const addText = (text,time) =>({
    type: TEXT_ADDED,
    payload: {
        text,
        time, 
    },
});
