import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Todo from 'pages/Todo';

export default function Router(){
	
	return(
		<Switch>
			<Route path = "/" component = {Todo}/>
		</Switch>
	);
}