import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Routes from './routes';
import ScrollToTop from 'react-router-scroll-top';

class App extends Component {
	render(){
		return (
			<Router onUpdate={() => alert(1)} >
				<ScrollToTop>
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
				</ScrollToTop>
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
