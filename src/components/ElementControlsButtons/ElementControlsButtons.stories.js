import { ElementControlsButtons } from ".";

export default {
  title: "Components/ElementControlsButtons",
  component: ElementControlsButtons,
  argTypes: {
    buttonTypes: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    states: {
      options: ["hover-over", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    darkMode: true,
    buttonTypes: "primary",
    states: "hover-over",
    className: {},
    divClassName: {},
    text: "Primary",
    hasDiv: true,
    text1: "Secondary",
  },
};
