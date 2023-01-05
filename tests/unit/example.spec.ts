import { mount } from "@vue/test-utils";
import ActionCard from "@/components/ActionCard.vue";

// mock @/store usePostsStore
jest.mock("@/store", () => ({
  usePostsStore: () => ({
    timeTravel: jest.fn(),
  }),
}));

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", async () => {
    const msg = "Moved post 3 from index 1 to index 2";
    const wrapper = mount(ActionCard, {
      props: {
        commitHistory: {
          firstIndex: 1,
          secondIndex: 2,
          postId: 3,
          history: [],
        },
        index: 0,
      },
    });

    const button = wrapper.find("button");

    await button.trigger("click");

    expect(wrapper.text()).toMatch(msg);
  });
});
