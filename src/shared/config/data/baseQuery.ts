import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ABDULLA_IP = `localhost`;

export const baseQuery = fetchBaseQuery({
  baseUrl: `http://${ABDULLA_IP}:8080/`,
});
