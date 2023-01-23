import axios from "axios";
import { TFact } from "./FactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomFacts = createAsyncThunk(
  "facts/fetchAll",
  async (num: number, thunkAPI) => {
    try {
      const response = await axios.get<TFact[]>(
        `${process.env.REACT_APP_FACTS_URL}?limit=${num}`,
        {
          headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
        }
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Не удалось загрузить факты");
    }
  }
);
