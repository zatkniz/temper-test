import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList.vue";

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum",
  },
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum",
  },
];

// create a spy for pinia store posts
jest.mock("@/store/index", () => ({
  usePostsStore: () => ({
    posts,
    getPosts: jest.fn(),
  }),
}));

describe("PostList.vue", () => {
  it("renders PostList successfully", async () => {
    const wrapper = shallowMount(PostList);

    expect(wrapper).toBeTruthy();
  });

  it("renders PostList successfully", async () => {
    const wrapper = shallowMount(PostList);
    expect(wrapper.findAll("post-card-stub").length).toBe(posts.length);
  });
});
