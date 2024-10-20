import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "ClashDisplay-Bold": require("../assets/fonts/ClashDisplay-Bold.ttf"),
    "ClashDisplay-Semibold": require("../assets/fonts/ClashDisplay-Semibold.ttf"),
    "ClashDisplay-Medium": require("../assets/fonts/ClashDisplay-Medium.ttf"),
    "ClashDisplay-Regular": require("../assets/fonts/ClashDisplay-Regular.ttf"),
    "ClashDisplay-Light": require("../assets/fonts/ClashDisplay-Light.ttf"),
    "ClashDisplay-Extralight": require("../assets/fonts/ClashDisplay-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
