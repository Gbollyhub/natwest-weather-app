import { format, isValid } from "date-fns";

// formatDateTime takes a date string eg "2023-10-01 12:00:00" and returns a formatted date eg "12:00 PM, October 1, 2023".
export function formatDateTime(value: string): string {
  const date = new Date(value.replace(" ", "T"));
  if (!isValid(date)) return "";
  return format(date, "h:mm a, MMMM d, yyyy");
}
