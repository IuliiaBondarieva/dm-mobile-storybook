import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa', // neutral-50
  },
  scroll: {
    flex: 1,
  },
  padding: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#262626', // neutral-800
  },
  subtitle: {
    color: '#525252', // neutral-600
  },
});

const HomeScreen = () => {
  const router = useRouter();
  
  const handleScanCard = () => {
    router.push('/scan/can');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scroll}>
        <View style={styles.padding}>
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>DocMorris</Text>
              <Text style={styles.subtitle}>Your digital pharmacy</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

let EntryPoint = HomeScreen;

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";


if (storybookEnabled) {
   const StorybookUI = require("../../.rnstorybook").default;
   EntryPoint = () => {
     return (
       <View style={{ flex: 1 }}>
         <StorybookUI />
       </View>
     );
   };
 }

 export default EntryPoint;