import React from "react";
import { useAppSelector } from "../hooks/redux";
import { useDispatch } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { factsSlice } from "../store/reducers/FactsSlice";
import { fetchRandomFacts } from "../store/reducers/ActionCreator";

const FactInput = () => {
  const { isLoading, numberOfFacts } = useAppSelector(
    (state) => state.factsReducer
  );
  const dispatch = useDispatch<ThunkDispatch<number, AnyAction, any>>();

  const { getFactNumber } = factsSlice.actions;
  const isValidValue = (n: number) => n > 0 && n < 6;

  const onHandleFact = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(value);
    dispatch(getFactNumber(val));

    if (isValidValue(val)) {
      dispatch(fetchRandomFacts(val));
    }
  };

  return (
    <input
      onChange={onHandleFact}
      value={numberOfFacts}
      className={"input"}
      type="number"
      disabled={isLoading}
      placeholder={"enter number of facts"}
    />
  );
};

export { FactInput };
