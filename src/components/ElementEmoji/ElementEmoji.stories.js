import { ElementEmoji } from ".";

export default {
  title: "Components/ElementEmoji",
  component: ElementEmoji,
  argTypes: {
    types: {
      options: [
        "thoughts",
        "article",
        "lie",
        "contact",
        "goal",
        "designer",
        "image",
        "insights",
        "folio",
        "truth",
        "personal-project",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    types: "thoughts",
    className: {},
  },
};
