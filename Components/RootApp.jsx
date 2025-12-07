// navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// react/expo
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Databases
import { getTheme } from '../Database/SQLiteSlices/ThemeSlice';
// components/variables
import { Theme } from '../Constants/Colors';
import HomeBottomNavigator from './Navigators/HomeBottomNavigator';
import { Profile } from '../Screens';

const Stack = createStackNavigator();

const RootApp = () => {
  const dispatch = useDispatch();
  // light/dark theme
  const colorScheme = useSelector(state => state.theme.theme);
  useEffect(() => {
    dispatch(getTheme());
  }, []);
  const theme = Theme[colorScheme] ?? Theme.light;
  return (
    <>
      <StatusBar
        style={colorScheme === 'dark' ? 'light' : 'dark'}
        backgroundColor={theme.background}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.background
            },
            headerTintColor: theme.textPrimary
          }}
        >
          <Stack.Screen
            name="Main"
            component={HomeBottomNavigator}
            options={({ navigation }) => ({
              headerTitle: 'WealthWise',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}
                  style={{ marginRight: 15 }}
                >
                  <Image
                    source={{ uri: 'https://i.pravatar.cc/100' }}
                    style={{ width: 35, height: 35, borderRadius: 20 }}
                  />
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootApp;
