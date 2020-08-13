import React from 'react';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Index';
import { Container } from 'reactstrap';

function App() {
  return (
  <Container>
    <Header/>
    <Home/>
    <Footer/>
  </Container>
  );
}

export default App;
