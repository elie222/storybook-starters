import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Button",
  component: Button,
  decorators: [withDesign],
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

Text.story = {
  name: "Button text with figma example",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/a7Dlr5SxcDXaqrLUUCTlsH/SaaS-CRM-UI-Kit---FrontWork?node-id=1152%3A27",
    },
  },
};
