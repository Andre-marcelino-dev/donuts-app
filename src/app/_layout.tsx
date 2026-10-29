import { SplashScreen, Stack } from "expo-router";

import { useFonts} from 'expo-font';

import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { useEffect } from "react";

import AvisoHost from "@/components/avisoHost";

// Mesmas fontes do site: Poppins nos textos e Playfair Display nos títulos
export const fontesCarregar={Poppins_400Regular, Poppins_600SemiBold, PlayfairDisplay_700Bold}

export default function RootLayout (){
  const [fontsLoader]= useFonts(fontesCarregar);

  useEffect(() => {
    if(fontsLoader){
      SplashScreen.hideAsync();
    }

  })
  return(
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <AvisoHost />
    </>
  );
}