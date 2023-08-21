import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const baseQuery = fetchBaseQuery({
  baseUrl: publicRuntimeConfig.backURL,
});
