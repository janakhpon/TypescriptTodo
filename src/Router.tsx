import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container'
import * as routes from './routes'

//Components
import Header from './components/Header'

// Pages
import Todo from 'pages/Todo';

export default function Router() {
	let location = useLocation()
	return (
		<>
		{
			location.pathname !== `${routes.HOME}` && <Header />
		}
			<Container maxWidth="md">
				<Switch>
					<Route path="/" component={Todo} />
				</Switch>
			</Container>
		</>
	);
}