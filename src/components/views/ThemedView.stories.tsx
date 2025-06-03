import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { ThemedView, ThemedScrollView } from './ThemedView';
import { ThemedText } from '@/components/typography/ThemedText';

const meta: Meta<typeof ThemedView> = {
  title: 'Components/ThemedView',
  component: ThemedView,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'centered', 'card', 'container'],
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 20, minHeight: 200, minWidth: 300 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
  },
  render: (args) => (
    <ThemedView {...args}>
      <ThemedText type="title">Default View</ThemedText>
      <ThemedText type="default">This is a basic themed view with background color from theme.</ThemedText>
    </ThemedView>
  ),
};

export const Centered: Story = {
  args: {
    type: 'centered',
    style: { height: 200 },
  },
  render: (args) => (
    <ThemedView {...args}>
      <ThemedText type="title">Centered Content</ThemedText>
      <ThemedText type="default">This content is centered both horizontally and vertically.</ThemedText>
    </ThemedView>
  ),
};

export const Card: Story = {
  args: {
    type: 'card',
  },
  render: (args) => (
    <ThemedView {...args}>
      <ThemedText type="subtitle">Card Component</ThemedText>
      <ThemedText type="default">This is a card with shadow, padding, and rounded corners from theme variables.</ThemedText>
    </ThemedView>
  ),
};

export const Container: Story = {
  args: {
    type: 'container',
    style: { height: 200 },
  },
  render: (args) => (
    <ThemedView {...args}>
      <ThemedText type="title">Container Layout</ThemedText>
      <ThemedText type="default">This container takes full flex with theme-based padding.</ThemedText>
    </ThemedView>
  ),
};

export const ScrollableList: Story = {
  render: () => (
    <View style={{ height: 300 }}>
      <ThemedScrollView type="list">
        {Array.from({ length: 15 }, (_, i) => (
          <ThemedView key={i} type="card" style={{ marginBottom: 8 }}>
            <ThemedText type="subtitle">List Item {i + 1}</ThemedText>
            <ThemedText type="default">This is a scrollable list item with theme-based spacing and styling.</ThemedText>
          </ThemedView>
        ))}
      </ThemedScrollView>
    </View>
  ),
};

export const ScrollableContent: Story = {
  render: () => (
    <View style={{ height: 300 }}>
      <ThemedScrollView type="scrollable">
        <ThemedText type="title">Scrollable Content</ThemedText>
        <ThemedText type="default" style={{ marginBottom: 16 }}>
          This is a scrollable view with flexible content. The content grows as needed with proper padding.
        </ThemedText>
        {Array.from({ length: 15 }, (_, i) => (
          <ThemedText key={i} type="default" style={{ marginBottom: 8 }}>
            Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </ThemedText>
        ))}
      </ThemedScrollView>
    </View>
  ),
};

export const ScrollViewTypes: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <ThemedText type="title">ScrollView Types</ThemedText>
      <ThemedText type="subtitle">ThemedScrollView with different configurations</ThemedText>
      
      <View style={{ flexDirection: 'row', gap: 16, height: 200 }}>
        <View style={{ flex: 1 }}>
          <ThemedText type="subtitle" style={{ marginBottom: 8 }}>Scrollable Type</ThemedText>
          <ThemedScrollView type="scrollable">
            <ThemedText type="default">
              This is a scrollable view with medium padding and flexible growth. 
              Content adapts to the available space and scrolls when needed.
            </ThemedText>
            {Array.from({ length: 8 }, (_, i) => (
              <ThemedText key={i} type="default" style={{ marginTop: 8 }}>
                Content line {i + 1} with scrollable layout
              </ThemedText>
            ))}
          </ThemedScrollView>
        </View>
        
        <View style={{ flex: 1 }}>
          <ThemedText type="subtitle" style={{ marginBottom: 8 }}>List Type</ThemedText>
          <ThemedScrollView type="list">
            {Array.from({ length: 6 }, (_, i) => (
              <ThemedView key={i} type="card" style={{ marginBottom: 4 }}>
                <ThemedText type="default">List Item {i + 1}</ThemedText>
              </ThemedView>
            ))}
          </ThemedScrollView>
        </View>
      </View>
    </View>
  ),
};