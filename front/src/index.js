import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./Component/Navbar"
import styled from 'styled-components'

const Container = styled.article`;
  position: absolute;
  left: 0;
  width: 100%;
  height: 130%;
  background: ${props => props.color};
`
const ContainerColor = () => {
  const NowPath = window.location.pathname
  if ((NowPath == '/login') || (NowPath == '/signup')) {
    return '#2f394d'
  } else {
    return '#fff'
  }
}

const Color = ContainerColor()

ReactDOM.render(
  <Container color={Color}>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </Container>,
  document.getElementById("root")
);
