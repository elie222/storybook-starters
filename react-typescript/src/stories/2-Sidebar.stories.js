import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Sidebar",
  component: Button,
  decorators: [withDesign],
};

export const Sidebar = () => (
  <Button onClick={action("clicked")}>Turn this into a sidebar :)</Button>
);

Sidebar.story = {
  name: "Sidebar",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/a7Dlr5SxcDXaqrLUUCTlsH/SaaS-CRM-UI-Kit---FrontWork?node-id=6201%3A595",
    },
  },
};
