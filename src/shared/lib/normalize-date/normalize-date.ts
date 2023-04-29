import { format } from "date-fns";

const dateTimeFormat: string = "dd.MM.yyyy HH:mm";
const dateFormat: string = "dd.MM.yyyy";

export const normalizeDate = (
  date: string,
  withTime: boolean = true
): string => {
  return format(new Date(date), withTime ? dateTimeFormat : dateFormat);
};
