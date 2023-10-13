import { Component } from "react";
import Card from "./card";

export class Cards extends Component {
  render() {
    return (
      <div className="cards">
        <Card name="Безлимитный 300" price="300" speed="10" color="blue" />
        <Card name="Безлимитный 450" price="450" speed="50" color="green" />
        <Card name="Безлимитный 550" price="550" speed="100" color="red" />
        <Card name="Безлимитный 1000" price="1000" speed="1000" color="black" />
      </div>
    );
  }
}
