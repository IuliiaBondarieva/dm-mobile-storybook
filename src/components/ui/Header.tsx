import React from 'react';
import { View, Text, StatusBar, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
// import { ArrowLeft } from 'lucide-react-native';
// import tw from '@/lib/tailwind';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  rightComponent,
}) => {
  const router = useRouter();
  
  const handleGoBack = () => {
    router.back();
  };
  
  return (
    <View style={[
      // tw`bg-white px-4 pt-2 pb-3 flex-row items-center`,
      // Platform.OS === 'ios' ? tw`shadow-sm` : tw`shadow-md`,
    ]}>
      {showBackButton && (
        <TouchableOpacity 
          onPress={handleGoBack}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          // style={tw`mr-3`}
        >
          {/* <ArrowLeft size={24} color={tw.color('neutral-800')} /> */}
        </TouchableOpacity>
      )}
      
      {/* <Text style={tw`text-xl font-bold flex-1 text-neutral-800`}>{title}</Text> */}
      
      {rightComponent && (
        <View>
          {rightComponent}
        </View>
      )}
    </View>
  );
};