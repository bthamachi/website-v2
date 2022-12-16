import { Metadata } from "@/types/Post";
import { format } from "date-fns";

export const formatDate = (meta: Metadata) => {
  return format(new Date(meta.date), "MMMM d, yyyy ");
};
