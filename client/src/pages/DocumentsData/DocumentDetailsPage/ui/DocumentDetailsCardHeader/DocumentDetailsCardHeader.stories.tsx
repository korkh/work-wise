import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {DocumentDetailsCardHeader} from "./DocumentDetailsCardHeader";

const meta: Meta<typeof DocumentDetailsCardHeader> = {
  title: "shared/DocumentDetailsCardHeader",
  component: DocumentDetailsCardHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{}}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};

export default meta;

type Story = StoryObj<DocumentDetailsCardHeader;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
