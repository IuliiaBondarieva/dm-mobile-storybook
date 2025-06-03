import { SafeAreaView, StyleSheet } from 'react-native';
import { Header } from '@/components/ui/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa', // neutral-50
  },
});

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cart" />
    </SafeAreaView>
  );
}