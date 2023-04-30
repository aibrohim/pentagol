import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "@/shared/config/axios";

function fetchLeagues() {
  return axiosInstance.get("/league/list");
}

export const getLeagues = createAsyncThunk("leagues/getLeagues", async () => {
  const response = await fetchLeagues();
  return response.data;
});
