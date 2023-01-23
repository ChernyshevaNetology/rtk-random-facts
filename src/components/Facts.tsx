import React from "react";
import { useAppSelector } from "../hooks/redux";
import { TFact } from "../store/reducers/FactsSlice";

const Facts = () => {
  const { facts } = useAppSelector((state) => state.factsReducer);

  if (facts.length > 0) {
    return (
      <div className={"facts"}>
        <ol>
          {facts.map(({ fact }: TFact, i: number) => (
            <li key={i}>{fact}</li>
          ))}
        </ol>
      </div>
    );
  }

  return null;
};

export { Facts };
