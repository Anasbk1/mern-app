// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BarberDetail from "./screens/BarberDetail.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, DefaultTheme } from "@react-navigation/stack";
import Login from './screens/Login.js';
import Signup from './screens/Signup.js';
import Home from './screens/Home.js';
import Profile from './screens/Profile.js';
import Saved from './screens/Saved.js';
import RemoveSaved from './screens/RemoveSaved.js';
import { MyProvider } from './useContext/useContext.js';
import UpdateUser from './screens/UpdateUser.jsx'

const Stack = createStackNavigator()

export default function App() {
  return (
    <MyProvider>
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }} initialRouteName="Login"

    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen name ="RemoveSaved" component={RemoveSaved}/>
      <Stack.Screen name = "BarberDetail" component={BarberDetail}/>
      <Stack.Screen name = "UpdateUser" component ={UpdateUser}/>
    </Stack.Navigator>
  </NavigationContainer>
  </MyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
