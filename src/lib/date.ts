import { format, isValid } from "date-fns";

export function formatDateTime(value: string): string {
  const date = new Date(value.replace(" ", "T"));
  if (!isValid(date)) return "";
  return format(date, "h:mm a, MMMM d, yyyy");
}