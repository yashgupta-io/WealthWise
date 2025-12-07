import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTheme,
  toggleThemeLocally
} from '../Database/SQLiteSlices/ThemeSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const colorScheme = useSelector(state => state.theme.theme);
  async function changeTheme() {
    try {
      dispatch(setTheme(colorScheme));
      dispatch(toggleThemeLocally(colorScheme));
    } catch (error) {
      console.log(error);
    }
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
