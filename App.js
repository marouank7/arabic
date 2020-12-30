import React from 'react';
import Home from './src/services/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Audio1 from './src/Components/Audio/Audio1'
import Player from './src/Components/Audio/Player'
import Game1 from './src/Components/Game1'

// import i18n from "./src/services/i18n";
// import {useTranslation} from 'react-i18next'
// import 'react-native-gesture-handler';
// import Main from './Main';
// const initI18n = i18n;
// const {t, i18n} = useTranslation();

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Player" component={Player}/>
          <Stack.Screen name="Audio1" component={Audio1}/>
          <Stack.Screen name="Game1" component={Game1}/>
          <Stack.Screen name="Home" component={Home}/>
          {/* <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  )
};

export default App;