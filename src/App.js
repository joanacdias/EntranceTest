import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme.js';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { Home, EntranceTest } from "./pages";

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Router>
						<Switch>
							<Route
								exact
								path="/"
								render={() => {
									return (
										<Redirect to="/home" />
									)
								}}
							/>
							<Route exact path="/home" component={Home} />
							<Route exact path="/entrance-test" component={EntranceTest} />
						</Switch>
					</Router>
				</ThemeProvider>
			</React.Fragment>
		);
  }
}

export default App;
