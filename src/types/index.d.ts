export type TodoType = {
    id: number;
    text: string;
}

export interface TodoListProps {
    todoList: TodoType[];
    handleTodoList: (todo) => void;
}

export interface TodoItemProps {
    todo: TodoType;
    deleteTodo: (id) => void;
}

export interface TodoSubmitProps {
    todoList: TodoType[];
    handleTodoList: (todo) => void;
}