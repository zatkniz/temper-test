import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders app successfully", async () => {
    const wrapper = shallowMount(App);

    expect(wrapper).toBeTruthy();
  });
});
