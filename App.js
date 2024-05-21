import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import RegisterScreen from './screens/RegisterScreen';

// TODO: Navigation Container

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        console.log("User Logged In... " + user.email)
      } else {
        setLoggedIn(false);
        console.log("No User Logged In...")
      }
    })
    return unsubscribe
  }, [])

 return loggedIn;
};

export default function App() {

  const isSignedIn = getIsSignedIn();

  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const unsubscribe =onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setLoggedIn(true);
  //       console.log("User Logged In... " + user.email)
  //     } else {
  //       setLoggedIn(false);
  //       console.log("No User Logged In...")
  //     }
  //   })
  //   return unsubscribe
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name='Profile' component={ProfileScreen}/>
          </>
        ) : (
          <>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // <>
    //   {isSignedIn ? (
    //     <ProfileScreen />
    //   ):(
    //     <LoginScreen />
    //   )}
    
    // </>
  );  
}


