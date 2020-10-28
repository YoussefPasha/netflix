import React from "react";
import jumboData from "./fixtures/jumbo.json";
import Jumbotron from "./components/jumbotron";
export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        return (
          <Jumbotron key={item.id} direction={item.direction}>
            <h2>{item.title}</h2>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
}
