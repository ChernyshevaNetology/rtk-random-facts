import React from "react";
import { useAppSelector } from "../hooks/redux";

const Error = () => {
  const { error } = useAppSelector((state) => state.factsReducer);

  if (error) {
    return (
      <div className={"error-message"}>
        <p>Введите число от 1 до 5</p>
      </div>
    );
  } else {
    return null;
  }
};

export { Error };
