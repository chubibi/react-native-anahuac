import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Router } from '@/app/routes/Router';
import { useAppearance } from '@/app/hooks/useAppearance';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@/app/components/Toast';

export default function App() {
  const { isDarkMode } = useAppearance()

  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <StatusBar
          style={!isDarkMode ? "dark" : "light"}
          backgroundColor="transparent" />
        <Router />
      </GestureHandlerRootView>
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
}
