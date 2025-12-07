// navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// react/expo
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
// components/constants
import { Theme } from '../../Constants/Colors';
import { Budget, Home, Reports, Tools, Transactions } from '../../Screens';

// bottom navigator
const Tab = createBottomTabNavigator();

const HomeBottomNavigator = () => {
  // getting color theme
  const colorScheme = useSelector(state => state.theme.theme);
  const theme = Theme[colorScheme] ?? Theme.light;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Budget" component={Budget} />
      <Tab.Screen name="Add" component={Transactions} />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Tools" component={Tools} />
    </Tab.Navigator>
  );
};

export default HomeBottomNavigator;
