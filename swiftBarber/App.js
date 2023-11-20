// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BarberDetail from "./screens/BarberDetail.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, DefaultTheme } from "@react-navigation/stack";
import Login from './screens/Login.js';
import Signup from './screens/Signup.js';
import Home from './screens/Home.js';
import Saved from './screens/Saved.js';
import RemoveSaved from './screens/RemoveSaved.js';
import { MyProvider } from './useContext/useContext.js';
import UpdateUser from './screens/UpdateUser.jsx'
import loginBarber from './screens/barber/LogIn.js'
import SignInBarber from './screens/barber/SignIn.js'
import BarberProfile from './screens/barber/BarberProfile.js'
import EditProfile from './screens/barber/EditProfile.js'
import Appointement from './screens/Appointement.js';
import Work from './screens/Work.js';
import Privacy from './screens/barber/Privacy&Policy.js'
import Notification from './screens/barber/Notification.js'
import Schedule from './screens/barber/Schedule.js'
import Gallery from './screens/barber/Gallery.js';
import Explore from './screens/Explore.js'
import MySchedule from './screens/MySchedule.js'

const Stack = createStackNavigator()

export default function App() {
  return (
    <MyProvider>
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }} initialRouteName="Login"

    >
      <Stack.Screen name='Appointement' component={Appointement}/>
      <Stack.Screen name='Work' component={Work}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen name ="RemoveSaved" component={RemoveSaved}/>
      <Stack.Screen name = "BarberDetail" component={BarberDetail}/>
      <Stack.Screen name = "UpdateUser" component ={UpdateUser}/>
      <Stack.Screen name = "loginBarber" component={loginBarber}/>
      <Stack.Screen name = 'SignInBarber' component={SignInBarber} />
      <Stack.Screen name = 'BarberProfile' component={BarberProfile} />
      <Stack.Screen name = 'EditProfile' component={EditProfile} />
      <Stack.Screen name = 'Privacy' component={Privacy} />
      <Stack.Screen name = 'Notification' component={Notification} />
      <Stack.Screen name = 'Schedule' component={Schedule} />
      <Stack.Screen name = 'Gallery' component={Gallery} />
      <Stack.Screen name = 'Explore' component={Explore} />
      <Stack.Screen name = 'MySchedule' component={MySchedule} />

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
