import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { Container } from 'reactstrap';

function App() {
  return (
  <Container>
    <Header/>
    <MainContent/>
    <Footer/>
  </Container>
  );
}

export default App;
