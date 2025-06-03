import type { Meta, StoryObj } from '@storybook/react';
import { ScrollView, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from '@/components/views/ThemedView';

const meta: Meta<typeof ThemedText> = {
  title: 'Components/ThemedText',
  component: ThemedText,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'title', 'subtitle', 'link', 'description'],
    },
  },
  decorators: [
    (Story) => (
      <ThemedView type="container" style={{ minHeight: 200, minWidth: 300 }}>
        <Story />
      </ThemedView>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is default themed text using theme variables',
    type: 'default',
  },
};

export const Title: Story = {
  args: {
    children: 'This is a Title',
    type: 'title',
  },
};

export const Subtitle: Story = {
  args: {
    children: 'This is a subtitle',
    type: 'subtitle',
  },
};

export const Link: Story = {
  args: {
    children: 'This is a themed link',
    type: 'link',
  },
};

export const Description: Story = {
  args: {
    children: 'This is a description text that is centered with horizontal padding for better readability and presentation.',
    type: 'description',
  },
};

export const TypeShowcase: Story = {
  render: () => (
    <ScrollView style={{ gap: 20 }}>
      <ThemedText type="title">Typography System</ThemedText>
      <ThemedText type="subtitle">Different text types using useThemedStyles</ThemedText>
      
      <View style={{ gap: 16 }}>
        <ThemedView type="card">
          <ThemedText type="subtitle">Default Type</ThemedText>
          <ThemedText type="default">
            This is the default text type with medium size and normal line height. 
            Perfect for regular content and body text.
          </ThemedText>
        </ThemedView>
        
        <ThemedView type="card">
          <ThemedText type="subtitle">Title Type</ThemedText>
          <ThemedText type="title">Large Bold Title Text</ThemedText>
          <ThemedText type="default">
            Title type uses XL size, bold weight, and includes bottom margin. 
            Perfect for page headers and section titles.
          </ThemedText>
        </ThemedView>
        
        <ThemedView type="card">
          <ThemedText type="subtitle">Subtitle Type</ThemedText>
          <ThemedText type="subtitle">Medium Bold Subtitle</ThemedText>
          <ThemedText type="default">
            Subtitle type uses medium size with bold weight for section headers.
          </ThemedText>
        </ThemedView>
        
        <ThemedView type="card">
          <ThemedText type="subtitle">Link Type</ThemedText>
          <ThemedText type="link">This is a themed link</ThemedText>
          <ThemedText type="default">
            Link type uses default text color and medium size with normal line height.
          </ThemedText>
        </ThemedView>
        
        <ThemedView type="card">
          <ThemedText type="subtitle">Description Type</ThemedText>
          <ThemedText type="description">
            This is a description that demonstrates centered text with horizontal padding for better presentation and readability.
          </ThemedText>
          <ThemedText type="default">
            Description type is centered with horizontal padding, perfect for introductory text.
          </ThemedText>
        </ThemedView>
      </View>
    </ScrollView>
  ),
};