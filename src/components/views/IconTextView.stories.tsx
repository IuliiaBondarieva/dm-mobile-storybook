import type { Meta, StoryObj } from '@storybook/react';
import { IconTextView } from './IconTextView';

const meta: Meta<typeof IconTextView> = {
  title: 'Components/IconTextView',
  component: IconTextView,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    iconProps: {
      control: { disable: true },
      description: 'Props for the SvgIcon component',
    },
    text: {
      control: { type: 'text' },
      description: 'Text content to display next to the icon',
    },
    textProps: {
      control: { disable: true },
      description: 'Props for the ThemedText component',
    },
    spacing: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Spacing between icon and text',
    },
    alignment: {
      control: { type: 'select' },
      options: ['top', 'center', 'bottom'],
      description: 'Vertical alignment of icon and text',
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Layout direction',
    },
  },
  args: {
    iconProps: {
      name: 'home',
      size: 24,
      color: '#00463D',
    },
    text: 'Home',
    spacing: 'sm',
    alignment: 'center',
    direction: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconProps: {
      name: 'home',
      size: 24,
      color: '#00463D',
    },
    text: 'Home',
  },
};

export const WithLongText: Story = {
  args: {
    iconProps: {
      name: 'prescriptions',
      size: 24,
      color: '#00463D',
    },
    text: 'This is a very long text that should wrap properly while keeping the icon aligned to the top',
    alignment: 'top',
  },
};

export const VerticalLayout: Story = {
  args: {
    iconProps: {
      name: 'cart',
      size: 32,
      color: '#00463D',
    },
    text: 'Shopping Cart',
    direction: 'vertical',
    alignment: 'center',
    textProps: {
      type: 'subtitle',
    },
  },
};

export const LargeSpacing: Story = {
  args: {
    iconProps: {
      name: 'account',
      size: 24,
      color: '#00463D',
    },
    text: 'Account Settings',
    spacing: 'lg',
    textProps: {
      type: 'title',
    },
  },
};

export const SmallIcon: Story = {
  args: {
    iconProps: {
      name: 'delivery',
      size: 16,
      color: '#666',
    },
    text: 'Fast delivery available',
    spacing: 'xs',
    textProps: {
      type: 'description',
    },
  },
};

export const BottomAligned: Story = {
  args: {
    iconProps: {
      name: 'categories',
      size: 32,
      color: '#00463D',
    },
    text: 'Categories\nMultiple lines of text\nShould align to bottom',
    alignment: 'bottom',
    textProps: {
      style: { lineHeight: 20 },
    },
  },
};