import { ElementNavigationBack } from ".";

export default {
  title: "Components/ElementNavigationBack",
  component: ElementNavigationBack,
  argTypes: {
    states: {
      options: ["hover-over", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["right", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    darkMode: true,
    states: "hover-over",
    type: "right",
    className: {},
  },
};
