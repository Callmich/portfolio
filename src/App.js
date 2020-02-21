import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from "./Comps/Header";
import AboutMe from "./Comps/AboutMe";
import Skills from "./Comps/Skills";
import Projects from "./Comps/Projects"

function App() {
  const BodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin 3% 0;
  `

  
  return (
    <BodyDiv>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
    </BodyDiv>
  );
}

export default App;
