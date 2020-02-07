import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TodoFormProps, TodoType } from 'types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'styles/TodoForm.scss'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		nav: {
			display: 'block',
		},
		underline: {
			// normal style
			"&::before": {
				borderBottom: "1px solid #06D648"
			},
			// hover style
			"&:hover:not(.Mui-disabled):before": {
				borderBottom: "2px solid #DFEF4C"
			},
			// focus style
			"&::after": {
				borderBottom: "3px solid red"
			},

			background: 'transparent',
			color: '#ffffff',
		},
		formLabel: {
			color: '#ffffff',
			'&.Mui-focused': {
				color: '#d90429'
			}
		},
		text:{
			color: '#fff',
			background: 'transparent',
		},
	}),
);

export default function TodoSubmit({ todoList, handleTodoList }: TodoFormProps) {
	const classes = useStyles();
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
							InputProps={{ classes: { className: classes.underline } as any }}
							InputLabelProps={{ className: classes.formLabel }}
							inputProps={{className: classes.text}}
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
							fullWidth
							onClick={() => addTodo(todoInput)}>
							save
					</Button>
					</Grid>

				</Grid>
			</form>
		</>
	)
}