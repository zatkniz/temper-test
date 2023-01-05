import { Post } from "./Posts";

export interface History {
  firstIndex: number;
  secondIndex: number;
  postId: number;
  history: Post[];
}
