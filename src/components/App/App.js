import React, { Component } from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    data: [
      { ProductName: "Chai", Price: 10 },
      { ProductName: "Chang", Price: 20 }
    ],
    title: "Hello from KendoReact!"
  };

  render() {
    const { title, data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
        <Grid data={data}>
          <GridColumn field="ProductName" title="Product name" />
          <GridColumn field="Price" />
        </Grid>
      </div>
    );
  }
}

export default App;
