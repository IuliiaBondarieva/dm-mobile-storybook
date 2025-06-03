import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { View } from "react-native";
import { ThemedButton } from "./ThemedButton";

const meta = {
  title: "Components/ThemedButton",
  component: ThemedButton,
  args: {
    text: "Hello world",
  },
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ThemedButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: fn(),
    type: "primary",
  },
};


export const ButtonShowcase: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <ThemedButton type="primary" text='Primary Button' onPress={fn}/>
      <ThemedButton type="secondary" text='Secondary Button' onPress={fn}/>
      <ThemedButton type="tertiary" text='Tertiary Button' onPress={fn}/>
    </View>
  ),
};