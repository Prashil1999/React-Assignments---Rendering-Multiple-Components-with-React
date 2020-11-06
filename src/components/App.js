import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <h1 data-ns-test="project-name">music app</h1>
      <p data-ns-test="project-description">stay relaxed</p>
      <h1 data-ns-test="project-name">weather app</h1>
      <p data-ns-test="project-description">know weather in your city</p>
    </>
  );
};

export default App;
