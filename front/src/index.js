import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./Component/Navbar"
import styled from 'styled-components'

const Container = styled.article`;
  width: 100%;
  min-height: 2000px;
  background: #f5f5f5;
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
