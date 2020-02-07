import React, { useState } from 'react';
import { TodoFormProps, TodoType } from 'types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function TodoSubmit({ todoList, handleTodoList }: TodoFormProps) {

	const [todoInput, handleTodoInput] = useState<string>('');

	const addTodo = (todoInput: string) => {
		const todo: TodoType = createTodo(todoInput);
		handleTodoList([...todoList, todo]);
	}
	const createTodo = (todoInput: string) => {
		const lastTodoId = todoList.length > 0 ? todoList[todoList.length - 1].id : 1;
		return { id: lastTodoId + 1, content: todoInput, completed: false };
	}

	return (
		<>
			<form onSubmit={(e) => e.preventDefault()}>
				<Grid container spacing={1} justify="center">
					<Grid item xs={8}>
						<TextField
							className="SubmitInput"
							label="Your task here ... "
							type="search"
							fullWidth
							onChange={(e) => handleTodoInput(e.target.value)} />
					</Grid>
					<Grid item xs={3}>
						<Button
							className="SubmitButton"
							variant="contained"
							color="secondary"
							onClick={() => addTodo(todoInput)}>
							save
					</Button>
					</Grid>

				</Grid>
			</form>
		</>
	)
}