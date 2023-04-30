import { createAsyncThunk } from "@reduxjs/toolkit";

import { LeagueSchema } from "@/entities/league/model/types";

import Barsa from "@/shared/assets/img/barcelona.png";

function fetchLeagues() {
  return new Promise<{ data: LeagueSchema[] }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [
            { id: 1, img: Barsa, name: "Liga" },
            { id: 2, img: Barsa, name: "Ligajon" },
            { id: 3, img: Barsa, name: "Ligabek" },
            { id: 4, img: Barsa, name: "Ligaxon" },
          ],
        }),
      500
    )
  );
}

export const getLeagues = createAsyncThunk("leagues/getLeagues", async () => {
  const response = await fetchLeagues();
  return response.data;
});
