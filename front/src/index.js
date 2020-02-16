import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./Component/Navbar"
import styled from 'styled-components'

const Container = styled.article`;
  width: 100%;
  height: 100%;
  background: #2f394d;
`;

ReactDOM.render(
  <Container>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </Container>,
  document.getElementById("root")
);
