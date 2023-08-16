import { format } from "date-fns";

const dateTimeFormat = "dd.MM.yyyy HH:mm";
const dateFormat = "dd.MM.yyyy";

export const normalizeDate = (
  date: string,
  withTime = true
): string => {
  return format(new Date(date), withTime ? dateTimeFormat : dateFormat);
};
