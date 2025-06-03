import type { Meta, StoryObj } from '@storybook/react';
import { ClickableCardButton } from './ClickableCardButton';

const meta: Meta<typeof ClickableCardButton> = {
  title: 'Components/ClickableCardButton',
  component: ClickableCardButton,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    headerIcon: {
      control: { disable: true },
      description: 'Icon props for the header',
    },
    headerText: {
      control: { type: 'text' },
      description: 'Text displayed in the header next to the icon',
    },
    headerTextProps: {
      control: { disable: true },
      description: 'Props for the header text component',
    },
    subText: {
      control: { type: 'text' },
      description: 'Optional text displayed below the header',
    },
    subTextProps: {
      control: { disable: true },
      description: 'Props for the sub text component',
    },
    onPress: {
      action: 'pressed',
      description: 'Callback function when the button is pressed',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    arrowColor: {
      control: { type: 'color' },
      description: 'Custom color for the arrow icon',
    },
    headerBackgroundColor: {
      control: { type: 'color' },
      description: 'Custom background color for the header',
    },
  },
  args: {
    headerIcon: {
      name: 'home',
      size: 24,
      color: '#FFFFFF',
    },
    headerText: 'Go to Home',
    onPress: () => console.log('Button pressed'),
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerIcon: {
      name: 'home',
      size: 24,
      color: '#FFFFFF',
    },
    headerText: 'Go to Home',
  },
};

export const WithSubText: Story = {
  args: {
    headerIcon: {
      name: 'prescriptions',
      size: 24,
      color: '#FFFFFF',
    },
    headerText: 'Manage Prescriptions',
    subText: 'View, refill, and track your prescriptions. Get notifications when refills are due.',
  },
};

export const CustomHeaderBackground: Story = {
  args: {
    headerIcon: {
      name: 'cart',
      size: 24,
      color: '#00463D',
    },
    headerText: 'Shopping Cart',
    subText: 'Review items in your cart and proceed to checkout.',
    headerBackgroundColor: '#E7F3EE',
    arrowColor: '#00463D',
  },
};

export const AccountCard: Story = {
  args: {
    headerIcon: {
      name: 'account',
      size: 24,
      color: '#FFFFFF',
    },
    headerText: 'Account Settings',
    subText: 'Manage your profile, preferences, and security settings.',
    headerBackgroundColor: '#00463D',
  },
};

export const DeliveryCard: Story = {
  args: {
    headerIcon: {
      name: 'delivery',
      size: 24,
      color: '#FFFFFF',
    },
    headerText: 'Track Delivery',
    subText: 'Get real-time updates on your medication delivery status and estimated arrival time.',
  },
};

export const Disabled: Story = {
  args: {
    headerIcon: {
      name: 'categories',
      size: 24,
      color: '#FFFFFF',
    },
    headerText: 'Categories',
    subText: 'This feature is temporarily unavailable.',
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    headerIcon: {
      name: 'prescriptions',
      size: 24,
      color: '#FFFFFF',
    },
    headerText: 'Prescription Management System',
    subText: 'Access your complete prescription history, set up automatic refills, receive reminders for medication schedules, and manage multiple prescriptions for your entire family. Our comprehensive system ensures you never miss a dose.',
  },
};

export const SuccessTheme: Story = {
  args: {
    headerIcon: {
      name: 'home',
      size: 24,
      color: '#108455',
    },
    headerText: 'Order Completed',
    subText: 'Your order has been successfully placed and will be delivered within 2-3 business days.',
    headerBackgroundColor: '#E7F3EE',
    arrowColor: '#108455',
  },
};