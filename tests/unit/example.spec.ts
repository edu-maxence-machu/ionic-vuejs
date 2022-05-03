import { mount } from "@vue/test-utils";
import Tab1Page from "@/views/JokesPageFR.vue";

describe("JokesPAge.vue", () => {
  it("renders tab 1 JokesPage", () => {
    const wrapper = mount(Tab1Page);
    expect(wrapper.text()).toMatch("Tab 1 page");
  });
});
