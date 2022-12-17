import { Metadata } from "./Post";

export interface WorklogMetadata extends Metadata {
  rating: string;
}

export type WorklogData = {
  slug: string;
  meta: WorklogMetadata;
};
