import type { Meta, StoryObj } from '@storybook/react';
import { CANEntryScreen } from './screens/CANEntryScreen';
import { ThemedText } from './typography/ThemedText';
import { ThemedView } from '@/components/views/ThemedView';

const meta: Meta<typeof CANEntryScreen> = {
  title: 'Components/CANEntryScreen',
  component: CANEntryScreen,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    visible: {
      control: { type: 'boolean' },
      description: 'Controls whether the modal is visible',
    },
    onClose: {
      action: 'onClose',
      description: 'Callback function called when the modal is closed',
    },
    children: {
      control: { disable: true },
      description: 'Optional content to display in the modal',
    },
  },
  args: {
    visible: true,
    onClose: () => console.log('Modal closed'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: true,
  },
};

export const WithCustomContent: Story = {
  args: {
    visible: true,
    children: (
      <ThemedView style={{ padding: 20, gap: 16 }}>
        <ThemedText type="title">Custom CAN Entry Form</ThemedText>
        <ThemedText>Please enter your CAN (Care Account Number) below:</ThemedText>
        <ThemedView style={{ 
          padding: 16, 
          borderWidth: 1, 
          borderColor: '#ddd', 
          borderRadius: 8,
          backgroundColor: '#f9f9f9',
        }}>
          <ThemedText style={{ fontFamily: 'monospace' }}>
            [Input field would go here]
          </ThemedText>
        </ThemedView>
        <ThemedText type="caption" style={{ opacity: 0.7 }}>
          Your CAN is a 12-digit number found on your insurance card.
        </ThemedText>
      </ThemedView>
    ),
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'When visible is false, the modal is hidden and only the backdrop is shown in Storybook.',
      },
    },
  },
};