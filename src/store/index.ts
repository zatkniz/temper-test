import { Post } from "@/interfaces/Posts";
import { History } from "@/interfaces/History";
import axios from "axios";
import { defineStore } from "pinia";
import { readonly, ref } from "vue";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref<Post[]>([]);
  const commitHistory = ref<History[]>([]);

  /**
   * Fetches all the posts from the API and stores the first 5 in the posts state
   */
  const getPosts = async (): Promise<void> => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      /**
       * The api didn't support limit in the result so I had to slice the first 5
       */
      posts.value = data.slice(0, 5);
    } catch (error) {
      /**
       * Handle error in a better way
       */
      console.log(error);
    }
  };

  /**
   * @param firstIndex
   * @param secondIndex
   * Swaps the elements in the posts state
   */
  const swapPostsElements = (firstIndex: number, secondIndex: number): void => {
    /**
     * Gets the value of the element at the first index and store it into a temp variable
     */
    const temp = posts.value[firstIndex];

    /**
     * Stores the current state of the array so i can return to this state if the user wants to time travel.
     */
    const postsHistory = [...posts.value];

    /**
     * swaps the elements
     */
    posts.value[firstIndex] = posts.value[secondIndex];
    posts.value[secondIndex] = temp;

    /**
     * Adds the current state to the commit history into the first index of the array
     */
    commitHistory.value.unshift({
      firstIndex,
      secondIndex,
      postId: posts.value[secondIndex].id,
      history: postsHistory,
    });
  };

  /**
   * @param history
   * @param index
   * Reverts the state of the posts state to the state of the history array at the index
   */
  const timeTravel = (history: Post[], index: number): void => {
    /**
     * Sets the posts state to the history array at the index
     */
    posts.value = history;

    /**
     * Removes all the elements from the commit history array after the index
     */
    commitHistory.value.splice(index, commitHistory.value.length);
  };

  return {
    posts: readonly(posts),
    getPosts,
    swapPostsElements,
    commitHistory,
    timeTravel,
  };
});
