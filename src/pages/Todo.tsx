import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import { TodoType } from 'types';

// components
import TodoList from 'components/TodoList';
import TodoForm from 'components/TodoForm';

// style
import 'styles/Todo.scss';

export default function Todo() {
	const [todoList, handleTodoList] = useState<TodoType[]>([]);

	return (
		<div className="TodoWrapper">
			<div className="Todo">
				<Grid container spacing={1} justify="center" className="container-form">
					<Grid item xs={12} md={10}>
						<TodoForm
							todoList={todoList}
							handleTodoList={handleTodoList}
						/>
					</Grid>
				</Grid>

				<TodoList
					todoList={todoList}
					handleTodoList={handleTodoList} />
			</div>
		</div>
	)
}