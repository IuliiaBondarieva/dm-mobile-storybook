import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { SvgIcon } from "./SvgIcon";

const meta: Meta<typeof SvgIcon> = {
  title: "Components/SvgIcon",
  component: SvgIcon,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['home', 'categories', 'prescriptions', 'cart', 'account', 'delivery'],
      description: 'Icon name to display',
    },
    size: {
      control: { type: 'number', min: 16, max: 64, step: 4 },
      description: 'Size of the icon',
    },
    color: {
      control: { type: 'color' },
      description: 'Color of the icon',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color for round background',
    },
    backgroundSize: {
      control: { type: 'number', min: 24, max: 80, step: 4 },
      description: 'Size of the background circle',
    },
  },
  args: {
    name: "home",
    size: 24,
    color: '#666',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "home",
  },
};

export const WithBackground: Story = {
  args: {
    name: "prescriptions",
    size: 24,
    color: '#FFFFFF',
    backgroundColor: '#00463D',
  },
};

export const LargeWithBackground: Story = {
  args: {
    name: "cart",
    size: 32,
    color: '#00463D',
    backgroundColor: '#E7F3EE',
    backgroundSize: 56,
  },
};

export const AllIcons: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
      <SvgIcon name="home" size={24} />
      <SvgIcon name="categories" size={24} />
      <SvgIcon name="prescriptions" size={24} />
      <SvgIcon name="cart" size={24} />
      <SvgIcon name="account" size={24} />
      <SvgIcon name="delivery" size={24} />
    </View>
  ),
};

export const WithBackgrounds: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
      <SvgIcon name="home" size={24} color="#FFFFFF" backgroundColor="#00463D" />
      <SvgIcon name="categories" size={24} color="#00463D" backgroundColor="#E7F3EE" />
      <SvgIcon name="prescriptions" size={24} color="#FFFFFF" backgroundColor="#108455" />
      <SvgIcon name="cart" size={24} color="#00463D" backgroundColor="#ABD4C4" />
      <SvgIcon name="account" size={24} color="#FFFFFF" backgroundColor="#535353" />
      <SvgIcon name="delivery" size={24} color="#00463D" backgroundColor="#CFE6DD" />
    </View>
  ),
};