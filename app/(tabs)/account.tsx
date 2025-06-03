import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/typography/ThemedText';
import { ThemedView } from '@/components/views/ThemedView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa', // neutral-50
  },
});

export default function AccountScreen() {
  return (
    <ThemedView type='container'>
      <ThemedText type="title">Account Screen</ThemedText>
      <ThemedText type='description'>This screen would display user account information</ThemedText>
    </ThemedView>
  );
}