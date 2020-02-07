import React, { useState } from 'react';
import { TodoType } from 'types';

// components
import TodoList from 'components/TodoList';
import TodoSubmit from 'components/TodoSubmit';

// style
import 'styles/Todo.scss';

export default function Todo(){
	const [ todoList, handleTodoList ] = useState<TodoType[]>([]);
	
	return(
		<div className = "TodoWrapper">
			<div className = "Todo">
				<TodoSubmit 
					todoList = {todoList}
					handleTodoList = {handleTodoList}
					/>
				<TodoList 
					todoList = {todoList}
					handleTodoList = {handleTodoList}/>
			</div>
		</div>
	)
}