import React from "react";
import "./App.css";
import { useAppSelector } from "./hooks/redux";
import { Error } from "./components/error";
import { Facts } from "./components/Facts";
import Skeleton from "react-loading-skeleton";
import { FactInput } from "./components/FactInput";

function App() {
  const { isLoading, numberOfFacts } = useAppSelector(
    (state) => state.factsReducer
  );

  return (
    <div className="app">
      <FactInput />
      <Error />
      {isLoading ? (
        <Skeleton className={"loading-skeleton"} count={+numberOfFacts} />
      ) : (
        <Facts />
      )}
    </div>
  );
}

export default App;
