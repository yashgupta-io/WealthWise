// native components 
import { Image, TouchableOpacity, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// navigation components 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// icons and styles 
import { Ionicons } from '@expo/vector-icons';
import { Theme } from './Constants/Colors';
// custom components
import { Budget, Home, Profile, Reports, Tools, Transactions } from './Screens';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// bottom navigation 
function HomeBottomNavigator() {
  // light/dark theme 
  const colorScheme = useColorScheme();
  const theme = Theme[colorScheme] ?? Theme.light;
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: theme.background
      },
      tabBarActiveTintColor: theme.primary,
      tabBarInactiveTintColor: theme.textPrimary,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Budget') {
          iconName = focused ? 'book' : 'book-outline';
        } else if (route.name === 'Add') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
        } else if (route.name === 'Reports') {
          iconName = focused ? 'stats-chart' : 'stats-chart-outline';
        } else if (route.name === 'Tools') {
          iconName = focused ? 'calculator' : 'calculator-outline';
        }
        color = focused ? theme.primary : theme.textPrimary;
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Budget" component={Budget} />
      <Tab.Screen name='Add' component={Transactions} />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Tools" component={Tools} />
    </Tab.Navigator>
  )
}

// main stack navigation 
export default function App() {
  // light/dark theme 
  const colorScheme = useColorScheme();
  const theme = Theme[colorScheme] ?? Theme.light;
  return (
    <>
      <StatusBar value="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={HomeBottomNavigator} options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: theme.background
            },
            headerTintColor: theme.textPrimary,
            headerTitle: 'Dashboard',
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
            ),
          })} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}