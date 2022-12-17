import { Metadata } from "@/types/Post";
import { format } from "date-fns";

export const formatDateFromMetadata = (meta: Metadata) => {
  return format(new Date(meta.date), "MMMM d, yyyy ");
};
export const formatDate = (datestring: string) => {
  return format(new Date(datestring), "MMMM d, yyyy ");
};

export const formatDateToDDMMYYformat = (date: Date) => {
  return format(date, "yyyy-M-d");
};
