import React, { useState } from 'react';
import { TodoSubmitProps, TodoType } from 'types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function TodoSubmit({todoList, handleTodoList} : TodoSubmitProps){
	
	const [ todoInput, handleTodoInput ] = useState<string>('');
	
	const addTodo = (todoInput : string) => {
		const todo : TodoType = createTodo(todoInput);
		handleTodoList([...todoList, todo]);
	}
	const createTodo = (todoInput : string) => {
		const lastTodoId = todoList.length > 0 ? todoList[todoList.length - 1].id : 1;
		return { id : lastTodoId + 1, content : todoInput, completed : false };
	}
	
	return(
		<div className = "TodoSubmit">
			<form onSubmit = {(e)=>e.preventDefault()}>
				<TextField 
					className = "SubmitInput"
					id="standard-search" 
					label="Todo Field" 
					type="search"
					onChange = {(e)=>handleTodoInput(e.target.value)}/>

				<Button
					className = "SubmitButton"
					variant="contained" 
					color="secondary"
					onClick={()=>addTodo(todoInput)}>
					ADD TODO
				</Button>	
			</form>
		</div>
	)
}