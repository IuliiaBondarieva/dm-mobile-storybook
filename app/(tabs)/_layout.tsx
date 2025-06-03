import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { SvgIcon } from '@/components/SvgIcon';
import { getTheme } from '@/hooks/useTheme';

const tabScreens: Array<{
  name: 'index' | 'categories' | 'prescriptions' | 'cart' | 'account',
  title: string,
  icon: 'home' | 'categories' | 'prescriptions' | 'cart' | 'account',
}> = [
  {
    name: 'index',
    title: 'Home',
    icon: 'home',
  },
  {
    name: 'categories',
    title: 'Categories',
    icon: 'categories',
  },
  {
    name: 'prescriptions',
    title: 'Prescriptions',
    icon: 'prescriptions',
  },
  {
    name: 'cart',
    title: 'Cart',
    icon: 'cart',
  },
  {
    name: 'account',
    title: 'Account',
    icon: 'account',
  },
];

export default function TabLayout() {
  const activeColor = getTheme().colors.tabColorSelected
  const inactiveColor = getTheme().colors.tabColorDefault


  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: inactiveColor,
        tabBarActiveTintColor: activeColor,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingTop: 10,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
        },
        headerShown: false,
      }}
    >
      {tabScreens.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color }) => <SvgIcon size={23} name={icon} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}