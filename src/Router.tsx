import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container'
import * as routes from './routes'

//Components
import Header from './components/Header'

// Pages
import Todo from 'pages/Todo';
import Landing from 'pages/Landing';

// SCSS
import 'styles/Layout.scss'

export default function Router() {
	let location = useLocation()
	return (
		<>
			{
				location.pathname !== `${routes.LANDING}` && <Header />
			}
			<Container maxWidth="md" className="layout">
				<Switch>
					<Route
						exact
						path={routes.LANDING}
						component={() => <Landing />}
					/>
					<Route exact path={routes.HOME} component={() => <Todo />} />
				</Switch>
			</Container>
		</>
	);
}