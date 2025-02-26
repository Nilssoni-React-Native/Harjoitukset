import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import Settings from "./screens/Settings";
import Home from "./screens/Home";
import { StyleSheet } from "react-native";
import MainAppBar from "./components/MainAppBar";
import { ThemeContext } from "./context/ThemeContext";
import ThemeProvider from "./context/ThemeProvider";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#666" barStyle="light-content"/>
          <Stack.Navigator 
            initialRouteName='Home' 
            screenOptions={{header: (props) => 
              <MainAppBar {...props} backgroundColor="#666" icon="cog" color="#fff" />
            }}
          >
            <Stack.Screen name="Home">
              {() =>
                <Home />
              }
            </Stack.Screen>
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})