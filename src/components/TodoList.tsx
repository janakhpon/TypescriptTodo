import React from 'react';
import {
	TodoType,
	TodoListProps,
	TodoItemProps,
} from 'types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

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
		<>
			<Grid container spacing={1} justify="center" className="container-item">
				<Grid item xs={6}>
					<p className="content" onClick={() => completeTodo(todo.id)}>{todo.content}</p>
				</Grid>
				<Grid item xs={3}>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={() => deleteTodo(todo.id)}
					>update</Button>
				</Grid>
				<Grid item xs={3}>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={() => deleteTodo(todo.id)}
					>remove</Button>
				</Grid>
			</Grid>
		</>
	)
}