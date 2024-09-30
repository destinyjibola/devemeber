import { Stack } from "expo-router"
import {Inter_500Medium, useFonts } from "@expo-google-fonts/inter";
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync;


const RootLayout = () => {
  const [fontsLoaded, fontsError] = useFonts({
    Inter: Inter_500Medium,
    Poppins: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }
  
  return <Stack screenOptions={{headerStyle:{ backgroundColor: "#303030"}, headerTintColor:"white"}} >
    <Stack.Screen name="index" options={{title:"Devember"}} />
  </Stack>
}

export default RootLayout