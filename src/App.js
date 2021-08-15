import React from "react";
import { Fragment } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/MealsSummary";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
