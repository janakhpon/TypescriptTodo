export type TodoType = {
	id : number;
	content : string;
	completed : boolean;
}

export interface TodoListProps{
	todoList : TodoType[];
	handleTodoList : (todo)=>void;
}

export interface TodoItemProps{
	todo : TodoType;
	deleteTodo : (id) => void;
	completeTodo : (id) => void;
}

export interface TodoFormProps{
	todoList : TodoType[];
	handleTodoList : (todo)=>void;
}