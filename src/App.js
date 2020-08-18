import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Routes from './routes';

class App extends Component {
	render(){
		return (
			<Router>
				<Container>
					<Header/>
					{/* body */}
					<Switch>
					{
						this.Route(Routes)
					}
					</Switch>
					{/* body */}
					<Footer/>
				</Container>
			</Router>
		);
	}
	Route = (routes)=> {
		var result = null;
		if(routes.length > 0){
			result = routes.map((route, index) => {
				return(
					<Route key={index} path={route.path} exact={route.exact} component={route.content} />
				);
			})
		}
		return result;
	}
}

export default App;
