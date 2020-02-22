export type todoType = {
    _id: string,
    text: string,
    date: string
}

export interface TodoFormProps {
    todoList: todoType[];
    handleTodoList: (todo) => void;
}


export interface ServerData {
    text: string
}

export interface SerRep {
    _id: string,
    text: string,
    date: string
}

export interface ServerResponse {
    data: SerRep
}