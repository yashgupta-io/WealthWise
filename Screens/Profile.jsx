import { Button, StyleSheet, Text, View } from 'react-native';
import { CreateAsync } from '../Database/AsyncStorage';
import { useAppTheme } from '../Utils/ThemeContext';

const Profile = () => {
  const { colorScheme, setColorScheme } = useAppTheme();
  async function changeTheme() {
    let toggleTheme;
    if (colorScheme == 'light') {
      toggleTheme = 'dark';
    } else {
      toggleTheme = 'light';
    }
    await CreateAsync('Theme', toggleTheme);
    setColorScheme(toggleTheme);
  }
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={changeTheme} title="theme" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
