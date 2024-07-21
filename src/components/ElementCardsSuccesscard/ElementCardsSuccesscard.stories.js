import { ElementCardsSuccesscard } from ".";

export default {
  title: "Components/ElementCardsSuccesscard",
  component: ElementCardsSuccesscard,
  argTypes: {
    successMetrics: {
      options: ["retention", "ROI", "adoption"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    successMetrics: "retention",
    darkMode: true,
    className: {},
    descriptionClassName: {},
    text: "Adoption",
    hasFrame: true,
    text1: "Retention",
  },
};
