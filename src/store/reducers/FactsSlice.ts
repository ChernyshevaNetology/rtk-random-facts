import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRandomFacts } from "./ActionCreator";

export type TFact = {
  fact: string;
};

export interface IFactsState {
  facts: TFact[];
  isLoading: boolean;
  numberOfFacts: string | number;
  error: boolean;
}

const initialState: IFactsState = {
  facts: [],
  isLoading: false,
  numberOfFacts: "",
  error: false,
};

export const factsSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {
    getFactNumber(state, action: PayloadAction<number>) {
      if (action.payload > 5 || action.payload < 1) {
        state.error = true;
        return;
      }

      state.numberOfFacts = action.payload;
      state.error = false;
    },
  },
  extraReducers: {
    [fetchRandomFacts.fulfilled.type]: (
      state,
      action: PayloadAction<TFact[]>
    ) => {
      state.isLoading = false;
      state.facts = action.payload;
      state.numberOfFacts = "";
    },
    [fetchRandomFacts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRandomFacts.rejected.type]: (state) => {
      state.isLoading = false;
      state.numberOfFacts = "";
    },
  },
});

export default factsSlice.reducer;
