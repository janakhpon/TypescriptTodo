import React from 'react';
import {
	TodoType,
	TodoListProps,
	TodoItemProps,
} from 'types';

import DeleteIcon from '@material-ui/icons/Delete';

export default function TodoList({ todoList, handleTodoList }: TodoListProps) {
	const deleteTodo = (id: number) => {
		const deleteTodoList = todoList.filter((todo: TodoType) => todo.id !== id);
		handleTodoList(deleteTodoList);
	}

	const completeTodo = (id: number) => {
		const completeTodoList = todoList.map((todo: TodoType) => {
			if (todo.id === id) todo.completed = !todo.completed;
			return todo;
		});
		handleTodoList(completeTodoList);
	}

	const todoListComponent = todoList.map((todo: TodoType) => (
		<TodoItem
			key={todo.id}
			todo={todo}
			deleteTodo={deleteTodo}
			completeTodo={completeTodo}
		/>
	));

	return (
		<div className="TodoList">
			{todoListComponent}
		</div>
	);
}

function TodoItem({ todo, deleteTodo, completeTodo }: TodoItemProps) {

	return (
		<div className="TodoItem">
			<p className="id">{todo.id}</p>
			<p className="content" onClick={() => completeTodo(todo.id)}>{todo.content}</p>
			<p className="completed">{todo.completed ? "O" : "X"}</p>
			<DeleteIcon
				className="deleteButton"
				onClick={() => deleteTodo(todo.id)} />
		</div>
	)
}