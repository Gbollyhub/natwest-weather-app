import { format } from "date-fns";

export const formatDateTime = (value: string) => {
  const date = new Date(value.replace(" ", "T"));

  return format(date, "h:mm a, MMMM d, yyyy");
};