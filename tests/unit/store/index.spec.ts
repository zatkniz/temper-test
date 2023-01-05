import { setActivePinia, createPinia } from "pinia";
import { usePostsStore } from "@/store/index";

// mock axios and return jsonplaceholder results
jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: new Array(10).fill(0).map((_, index) => ({
        userId: 1,
        id: index + 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum",
      })),
    }),
}));

describe("Posts Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("posts are by default an empty array", () => {
    const store = usePostsStore();
    expect(store.posts.length).toBe(0);
  });

  it("history is by default an empty array", () => {
    const store = usePostsStore();
    expect(store.commitHistory.length).toBe(0);
  });

  it("gets the 5 first result from the api", async () => {
    const store = usePostsStore();
    await store.getPosts();
    expect(store.posts.length).toBe(5);
  });

  it("swaps the elements inside the array", async () => {
    const firstIndex = 0;
    const secondIndex = 1;
    const store = usePostsStore();
    await store.getPosts();
    expect(store.posts[firstIndex].id).toBe(1);
    expect(store.posts[secondIndex].id).toBe(2);
    store.swapPostsElements(firstIndex, secondIndex);
    expect(store.posts[firstIndex].id).toBe(2);
    expect(store.posts[secondIndex].id).toBe(1);
  });

  it("pushes history on commitHistory", async () => {
    const firstIndex = 0;
    const secondIndex = 1;
    const store = usePostsStore();
    await store.getPosts();
    store.swapPostsElements(firstIndex, secondIndex);
    expect(store.commitHistory).toHaveLength(1);
  });

  it("reverts the state on time travel", async () => {
    const firstIndex = 0;
    const secondIndex = 1;
    const store = usePostsStore();
    await store.getPosts();
    store.swapPostsElements(firstIndex, secondIndex);
    expect(store.posts[firstIndex].id).toBe(2);
    expect(store.posts[secondIndex].id).toBe(1);

    const [firstCommitHistory] = store.commitHistory;
    store.timeTravel(firstCommitHistory.history, 0);
    expect(store.posts[firstIndex].id).toBe(1);
    expect(store.posts[secondIndex].id).toBe(2);
  });
});
